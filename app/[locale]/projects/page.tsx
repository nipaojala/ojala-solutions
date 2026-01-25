import type { Metadata } from "next";
import Image from "next/image";
import { Locale, useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/app/i18n/navigation";
import Section from "@/app/components/Section";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { use } from "react";
import approt_main_picture from "@/public/approt_main_picture.webp";
import isofan_frontpage_picture from "@/public/isofan_frontpage.webp";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(
  props: Omit<LocaleLayoutProps, "children">,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Metadata.projects",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "portfolio",
      "case studies",
      "work",
      "Approt.app",
      "Isofan",
      "web development portfolio",
      "React portfolio",
      "Next.js portfolio",
      "student app",
      "energy calculator",
      "Niilo Ojala portfolio",
      "Ojala Solutions portfolio",
    ],
    authors: [{ name: "Niilo Ojala" }],
    creator: "Niilo Ojala",
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      locale: locale === "fi" ? "fi_FI" : "en_US",
      siteName: "Ojala Solutions",
      url: "https://ojala-solutions.fi/projects",
      images: [
        {
          url: "/approt_main_picture.webp",
          width: 1200,
          height: 630,
          alt: "Approt.app Project",
        },
        {
          url: "/isofan_frontpage.webp",
          width: 1200,
          height: 630,
          alt: "Isofan Project",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/approt_main_picture.webp"],
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
      canonical: "https://ojala-solutions.fi/projects",
    },
    category: "Portfolio",
  };
}

export default function ProjectsPage({ params }: LocaleLayoutProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);
  const t = useTranslations("Projects");

  return (
    <div className="min-h-screen">
      <Header />

      <Section background="gradient" className="min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up delay-100">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Approt App Project */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-200 flex flex-col">
              <div className="relative h-64 md:h-80 bg-linear-to-br from-[#FFF2EF] to-[#FFF2EF] overflow-hidden shrink-0">
                <Image
                  src={approt_main_picture}
                  alt="Approt App - Desktop view"
                  placeholder="blur"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                      {t("approt.name")}
                    </h2>
                    <span className="px-3 py-1 bg-[#FFF2EF] text-[#1A2A4F] rounded-full text-sm font-medium">
                      {t("approt.tag")}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {t("approt.description")}
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {t("approt.features")}
                    </h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="shrink-0">•</span>
                        <span>{t("approt.feature1")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="shrink-0">•</span>
                        <span>{t("approt.feature2")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="shrink-0">•</span>
                        <span>{t("approt.feature3")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="shrink-0">•</span>
                        <span>{t("approt.feature4")}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      React
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      Web App
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://approt.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-center"
                    >
                      {t("approt.viewProject")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Isofan Project */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-300 flex flex-col">
              <div className="relative h-64 md:h-80 bg-linear-to-br from-[#FFF2EF] to-[#FFF2EF] overflow-hidden shrink-0">
                <Image
                  src={isofan_frontpage_picture}
                  alt="Isofan - Company website"
                  placeholder="blur"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                      {t("isofan.name")}
                    </h2>
                    <span className="px-3 py-1 bg-[#FFF2EF] text-[#1A2A4F] rounded-full text-sm font-medium">
                      {t("isofan.tag")}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {t("isofan.description")}
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {t("isofan.features")}
                    </h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="shrink-0">•</span>
                        <span>{t("isofan.feature1")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="shrink-0">•</span>
                        <span>{t("isofan.feature2")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="shrink-0">•</span>
                        <span>{t("isofan.feature3")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="shrink-0">•</span>
                        <span>{t("isofan.feature4")}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      React
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      Calculator
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://www.isofan.fi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-linear-to-r from-[#1A2A4F] to-[#F7A5A5] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-center"
                    >
                      {t("isofan.viewProject")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center animate-fade-in-up delay-400">
            <Link
              href="/"
              className="inline-block border-2 border-[#F7A5A5] text-[#F7A5A5] px-8 py-3 rounded-full hover:bg-[#F7A5A5] hover:text-white transition-colors font-medium text-lg"
            >
              {t("backToHome")}
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
/*  
<div className="px-8 pb-8 space-y-4">
<div className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden">
<Image
      src={isofan_ilmanpuhdistus}
      alt="Isofan - Air purification"
      placeholder='blur'
      className="object-contain p-3"
    />
</div>
<div className="grid grid-cols-2 gap-4">
  <div className="relative h-48 bg-gray-100 rounded-2xl overflow-hidden">
    <Image
      src={isofan_mobile_suodattimet}
      alt="Isofan - Mobile filters"
      placeholder='blur'
      className="object-contain p-3"
    />
  </div>
  <div className="relative h-48 bg-gray-100 rounded-2xl overflow-hidden">                   
    <Image
    src={isofan_mobile_ilmankierratys}
    alt="Isofan - Mobile air circulation"
    placeholder='blur'
    className="object-contain p-4"
  />
  </div>
</div>
</div> */

/*   
<div className="px-8 pb-8">
<div className="relative h-auto bg-gray-100 rounded-2xl overflow-hidden">
  <Image
    src={approt_mobile_view_picture}
    alt="Approt App - Mobile view"
    placeholder='blur'
    className="object-contain p-4"
  />
</div>
</div>*/
