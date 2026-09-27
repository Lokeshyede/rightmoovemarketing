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
  title:
    "RightMove Marketing | Digital Marketing & Performance Marketing Agency",

  description:
    "RightMove Marketing helps businesses grow with performance marketing, Meta Ads, Google Ads, lead generation, social media marketing, website development and digital advertising.",

  keywords: [
    "RightMove Marketing",
    "RightMove",
    "Digital Marketing Agency",
    "Performance Marketing Agency",
    "Performance Marketing",
    "Meta Ads Agency",
    "Google Ads Agency",
    "Google Ads Management",
    "Meta Ads",
    "Lead Generation",
    "Social Media Marketing",
    "Digital Advertising",
    "Website Development",
    "Ad Video Creation",
    "CRM Automation",
  ],

  authors: [{ name: "RightMove Marketing" }],
  creator: "RightMove Marketing",
  publisher: "RightMove Marketing",

  metadataBase: new URL("https://rightmovemarketing.in"),

  alternates: {
    canonical: "https://rightmovemarketing.in/",
  },

  verification: {
    google: "DP4mXJSpxEaZZHe2oKQHwyWr8PPUBZZmN",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "RightMove Marketing | Digital Marketing & Performance Marketing Agency",

    description:
      "Grow your business with Meta Ads, Google Ads, lead generation, social media marketing, website development and performance marketing.",

    url: "https://rightmovemarketing.in/",
    siteName: "RightMove Marketing",

    images: [
      {
        url: "/brand/logo-full-dark.png",
        width: 1200,
        height: 630,
        alt: "RightMove Marketing",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "RightMove Marketing | Digital Marketing & Performance Marketing Agency",

    description:
      "Performance marketing, Meta Ads, Google Ads, lead generation, social media marketing and digital advertising.",

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
    "@type": "Organization",

    name: "RightMove Marketing",
    alternateName: "RightMove",

    url: "https://rightmovemarketing.in/",

    logo: "https://rightmovemarketing.in/brand/logo-full-dark.png",

    description:
      "RightMove Marketing provides performance marketing, Meta Ads, Google Ads, lead generation, social media marketing, website development and digital advertising services.",

    knowsAbout: [
      "Digital Marketing",
      "Performance Marketing",
      "Meta Ads",
      "Google Ads",
      "Lead Generation",
      "Social Media Marketing",
      "Digital Advertising",
      "Website Development",
      "Video Advertising",
      "CRM Automation",
    ],
  };

  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} font-sans dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
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