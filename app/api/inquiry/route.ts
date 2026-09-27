import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, businessName, phone, email, services, budgetRange, businessType, message } = body;

    // Validate minimum required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required fields." },
        { status: 400 }
      );
    }

    // In production, this can seamlessly route to Slack webhook, SendGrid, Resend, or your CRM webhook
    console.log("[RightMove Lead Inbound]:", {
      timestamp: new Date().toISOString(),
      name,
      businessName,
      phone,
      email,
      services,
      budgetRange,
      businessType,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received. The RightMove growth team is reviewing your brief.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry API Error:", error);
    return NextResponse.json(
      { error: "Internal server processing error." },
      { status: 500 }
    );
  }
}
