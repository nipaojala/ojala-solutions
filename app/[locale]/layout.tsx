import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {notFound} from 'next/navigation';
import {routing} from '../i18n/routing';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{locale: string}>;
}

export async function generateMetadata(
  props: Omit<LocaleLayoutProps, 'children'>
): Promise<Metadata> {
  const {locale} = await props.params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'Metadata.layout'
  });

  return {
    title: {
      default: t('title'),
      template: t('titleTemplate'),
    },
    description: t('description'),
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
    metadataBase: new URL("https://ojala-solutions.fi"),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: "website",
      locale: locale === 'fi' ? 'fi_FI' : 'en_US',
      siteName: "Ojala Solutions",
      url: "https://ojala-solutions.fi",
      images: [
        {
          url: "/logo.webp",
          width: 1200,
          height: 630,
          alt: "Ojala Solutions Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ["/logo.webp"],
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
      canonical: "https://ojala-solutions.fi",
    },
    category: "Technology",
    classification: "Business",
  };
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
      <NextIntlClientProvider>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
