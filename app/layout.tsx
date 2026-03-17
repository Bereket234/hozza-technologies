import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hozza Technologies | Product Engineering for Startups",
  description:
    "We build fast, scalable, and premium software products. Hozza Technologies bridges the gap between abstract ideas and robust technological implementations.",
  keywords: [
    "software agency",
    "product engineering",
    "startup development",
    "MVP building",
    "web development",
    "mobile development",
    "AI integration",
  ],
  authors: [{ name: "Hozza Technologies" }],
  creator: "Hozza Technologies",
  publisher: "Hozza Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Hozza Technologies",
    description: "Build Fast. Scale Smart. Product Engineering for Startups.",
    url: "https://hozzatechnologies.com",
    siteName: "Hozza Technologies",
    images: [
      {
        url: "https://hozzatechnologies.com/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Hozza Technologies - Software Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hozza Technologies",
    description: "Product Engineering for Startups",
    images: ["https://hozzatechnologies.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for Generative Engine Optimization (GEO) and SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hozza Technologies",
    url: "https://hozzatechnologies.com",
    logo: "https://hozzatechnologies.com/logo.png",
    description:
      "Premium software engineering agency specializing in MVP development, scalable web apps, mobile apps, Analytics tools and AI integrations for startups and huge enterprises.",
    sameAs: [
      "https://twitter.com/hozzatech",
      "https://www.linkedin.com/company/hozza-technologies",
    ],
    keywords:
      "software development, MVP, startups, web development, AI integration",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
