import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { AtmosphericBackground } from "@/components/animations/AtmosphericBackground";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {


  title: "RightMove — Performance Marketing, Advertising & Digital Growth",
  description:
    "RightMove helps businesses grow through performance marketing, advertising, social media, lead generation and digital technology. Smart Moves. Real Results.",
  keywords: [
    "RightMove",
    "Performance Marketing",
    "Ad Video Creation",
    "Meta Ads Agency",
    "Google Ads Management",
    "Lead Generation",
    "Social Media Marketing",
    "Growth Partner",
    "High Conversion Websites",
    "CRM Automation",
  ],
  authors: [{ name: "RightMove Performance Marketing" }],
  creator: "RightMove",
  publisher: "RightMove",
  verification: {
  google: "DP4mXJSpxEaZZHe2oKQHwyWr8PPUBZZmN",
    },
  metadataBase: new URL("https://rightmovemarketing.in"),
  openGraph: {
    title: "RightMove — Performance Marketing, Advertising & Digital Growth",
    description:
      "RightMove helps businesses grow through performance marketing, advertising, social media, lead generation and digital technology.",
    url: "https://rightmovemarketing.in",
    siteName: "RightMove",
    images: [
      {
        url: "/brand/logo-full-dark.png",
        width: 1200,
        height: 630,
        alt: "RightMove Performance Marketing & Strategy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RightMove — Performance Marketing, Advertising & Digital Growth",
    description:
      "We help businesses get noticed, generate leads and grow through creative, advertising, strategy and technology.",
    images: ["/brand/logo-full-dark.png"],
  },
  icons: {
    icon: "/brand/logo-app-icon.png",
    shortcut: "/brand/logo-mark-transparent.png",
    apple: "/brand/logo-app-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: "RightMove Performance Marketing & Strategy",
    alternateName: "RightMove",
    url: "https://rightmovemarketing.in",
    logo: "https://rightmovemarketing.in/brand/logo-full-dark.png",
    description:
      "Modern performance marketing and digital growth company specializing in ad video creation, Meta and Google campaigns, lead generation, and scalable technology.",
    slogan: "Smart Moves. Real Results.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    knowsAbout: [
      "Advertisement Video Creation",
      "Social Media Management",
      "Social Media Content Creation",
      "Meta Ads",
      "Google Ads",
      "Lead Generation",
      "Performance Marketing",
      "Websites",
      "CRM Systems",
      "Automation",
    ],
  };

  return (
    <html lang="en" className={`${jakartaSans.variable} font-sans dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050608] text-white selection:bg-[#0B5CFF] selection:text-white antialiased overflow-x-hidden">
        <SmoothScroll>
          <AtmosphericBackground />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
