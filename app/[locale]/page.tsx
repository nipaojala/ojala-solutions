import type { Metadata } from "next";
import { Locale, useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import Typewriter from "../components/Typewriter";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { use } from "react";
import profilePic from "@/public/profilePic.webp";
import logo from "@/public/logo.webp";

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
    namespace: "Metadata.home",
  });

  return {
    title: {
      default: t("title"),
      template: "%s | Ojala Solutions",
    },
    description: t("description"),
    keywords: [
      "nettisivut",
      "web-sovellukset",
      "yrityssivut",
      "websites",
      "web apps",
      "companies",
      "web development",
      "React",
      "Next.js",
      "TypeScript",
      "SEO",
      "Ojala Solutions",
      "Finland",
    ],
    authors: [{ name: "Niilo Ojala" }],
    creator: "Niilo Ojala",
    publisher: "Ojala Solutions",
    metadataBase: new URL("https://ojala-solutions.fi"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      locale: locale === "fi" ? "fi_FI" : "en_US",
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
      title: t("ogTitle"),
      description: t("ogDescription"),
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
  };
}

export default function Home({ params }: LocaleLayoutProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);
  const t = useTranslations("Home");

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 bg-linear-to-br from-white via-[#FFF2EF] to-[#FFF2EF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F7A5A5] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up delay-100 min-w-0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] bg-clip-text text-transparent">
                  Ojala Solutions
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed min-w-0">
                <Typewriter text={t("hero.tagline")} speed={20} />
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Button href="#contact" variant="primary">
                  {t("hero.getInTouch")}
                </Button>
                <Button href="#about" variant="outline">
                  {t("hero.learnMore")}
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-slide-in-right delay-100">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-linear-to-r from-[#1A2A4F] to-[#F7A5A5] rounded-3xl transform rotate-3 blur-xl opacity-30"></div>
                <Image
                  src={logo}
                  alt="Ojala Solutions Logo"
                  width={500}
                  height={500}
                  className="relative rounded-3xl shadow-2xl animate-breathe "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up delay-100">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] bg-clip-text text-transparent">
                {t("about.title")}
              </span>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">{t("about.intro")}</p>
              <p className="text-lg">{t("about.whoFor")}</p>
              <p className="text-lg">
                {t.rich("about.founder", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
          </div>
          <div className="flex justify-center animate-slide-in-right delay-200">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] rounded-2xl transform -rotate-3 blur-xl opacity-20"></div>
              <Image
                src={profilePic}
                alt="Niilo Ojala"
                width={650}
                placeholder="blur"
                className="relative rounded-2xl shadow-xl object-cover aspect-4/5"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" background="gradient">
        <div className="text-center mb-12 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] bg-clip-text text-transparent">
              {t("services.title")}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-100 hover:scale-[1.02]">
            <div className="w-12 h-12 bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {t("services.websites.title")}
            </h3>
            <p className="text-gray-600">
              {t("services.websites.description")}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-200 hover:scale-[1.02]">
            <div className="w-12 h-12 bg-linear-to-r from-[#1A2A4F] to-[#F7A5A5] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {t("services.webapps.title")}
            </h3>
            <p className="text-gray-600">{t("services.webapps.description")}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-300 hover:scale-[1.02]">
            <div className="w-12 h-12 bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {t("services.designSeo.title")}
            </h3>
            <p className="text-gray-600">
              {t("services.designSeo.description")}
            </p>
          </div>
        </div>

        {/* Why us */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] bg-clip-text text-transparent">
              {t("whyUs.title")}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur p-6 rounded-2xl">
              <h3 className="font-semibold text-gray-800 mb-2">
                {t("whyUs.technologyTitle")}
              </h3>
              <p className="text-gray-600">{t("whyUs.technology")}</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-6 rounded-2xl">
              <h3 className="font-semibold text-gray-800 mb-2">
                {t("whyUs.seoTitle")}
              </h3>
              <p className="text-gray-600">{t("whyUs.seo")}</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-6 rounded-2xl">
              <h3 className="font-semibold text-gray-800 mb-2">
                {t("whyUs.clientNeedsTitle")}
              </h3>
              <p className="text-gray-600">{t("whyUs.clientNeeds")}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="white">
        <div className="text-center mb-12 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] bg-clip-text text-transparent">
              {t("contact.title")}
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
        <ContactForm />
      </Section>

      <Footer />
    </div>
  );
}
/* <p className="text-lg text-gray-600 italic">
                In my leisure time, I enjoy skateboarding and playing the piano, which helps me maintain a balanced and creative mindset.
              </p>*/
