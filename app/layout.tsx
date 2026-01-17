import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ojala Solutions | Software Development & Web Technologies",
    template: "%s | Ojala Solutions",
  },
  description: "Professional software development services by Niilo Ojala. 3+ years of experience in banking software, AI, and web technologies. Specialized in React, Node.js, TypeScript, and cloud services. Based in Finland.",
  keywords: [
    "software development",
    "web development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "banking software",
    "AI",
    "machine learning",
    "cloud services",
    "AWS",
    "Ojala Solutions",
    "Niilo Ojala",
    "Finland developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
  ],
  authors: [{ name: "Niilo Ojala" }],
  creator: "Niilo Ojala",
  publisher: "Ojala Solutions",
  metadataBase: new URL("https://ojala-solutions.com"),
  openGraph: {
    title: "Ojala Solutions | Software Development & Web Technologies",
    description: "Professional software development services by Niilo Ojala. 3+ years of experience in banking software, AI, and web technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Ojala Solutions",
    url: "https://ojala-solutions.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ojala Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojala Solutions | Software Development & Web Technologies",
    description: "Professional software development services by Niilo Ojala. 3+ years of experience in banking software, AI, and web technologies.",
    images: ["/logo.png"],
    creator: "@ojalasolutions",
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
  alternates: {
    canonical: "https://ojala-solutions.com",
  },
  category: "Technology",
  classification: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
