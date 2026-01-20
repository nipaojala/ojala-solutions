import type { Metadata } from 'next';
import {Locale, useTranslations} from 'next-intl';
import Image from 'next/image';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';
import Typewriter from '../components/Typewriter';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { use } from 'react';
import profilePic from '@/public/profilePic.webp';
import logo from '@/public/logo.webp';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}

export async function generateMetadata(
  props: Omit<LocaleLayoutProps, 'children'>
): Promise<Metadata> {
  const {locale} = await props.params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'Metadata.home'
  });

  return {
    title: {
      default: t('title'),
      template: '%s | Ojala Solutions',
    },
    description: t('description'),
    keywords: [
      'software development',
      'web development',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'banking software',
      'AI',
      'cloud services',
      'AWS',
      'Ojala Solutions',
      'Niilo Ojala',
      'Finland developer',
      'frontend developer',
      'backend developer',
      'full stack developer',
    ],
    authors: [{ name: 'Niilo Ojala' }],
    creator: 'Niilo Ojala',
    publisher: 'Ojala Solutions',
    metadataBase: new URL('https://ojala-solutions.fi'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      locale: locale === 'fi' ? 'fi_FI' : 'en_US',
      siteName: 'Ojala Solutions',
      url: 'https://ojala-solutions.fi',
      images: [
        {
          url: '/logo.webp',
          width: 1200,
          height: 630,
          alt: 'Ojala Solutions Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/logo.webp'],
      creator: '@ojalasolutions',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://ojala-solutions.fi',
    },
    category: 'Technology',
  };
}

export default function Home({params}: LocaleLayoutProps) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);
  const t = useTranslations('Home');
  
  const birthYear = 1997;
  const birthMonth = 6;
  const birthDay = 9;
  
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();
  
  let age = currentYear - birthYear;
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age -= 1;
  }

  const experienceStartYear = 2023;
  const yearsOfExperience = currentYear - experienceStartYear;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 bg-linear-to-br from-white via-[#F0FFDF] to-[#FFD8DF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#A8DF8E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFAAB8] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up delay-100">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] bg-clip-text text-transparent">
                  Ojala Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                <Typewriter text={t('hero.tagline')} speed={30} />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Button href="#contact" variant="primary">
                  {t('hero.getInTouch')}
                </Button>
                <Button href="#about" variant="outline">
                  {t('hero.learnMore')}
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-slide-in-right delay-100">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-linear-to-r from-[#A8DF8E] to-[#FFAAB8] rounded-3xl transform rotate-3 blur-xl opacity-30"></div>
                <Image
                  src={logo}
                  alt="Ojala Solutions Logo"
                  width={500}
                  height={500}
                  className="relative rounded-3xl shadow-2xl animate-breathe"
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
              <span className="bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                {t.rich('about.intro', {
                  age,
                  years: yearsOfExperience,
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </p>
              <p className="text-lg">
                {t.rich('about.journey', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </p>
              <p className="text-lg">
                {t.rich('about.experience', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </p>
              <p className="text-lg">
                {t('about.projects')}
              </p>
             
            </div>
          </div>
          <div className="flex justify-center animate-slide-in-right delay-200">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] rounded-2xl transform -rotate-3 blur-xl opacity-20"></div>
              <Image
                src={profilePic}
                alt="Niilo Ojala"
                width={650}
                placeholder='blur'
                className="relative rounded-2xl shadow-xl object-cover aspect-4/5"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" background="gradient">
        <div className="text-center mb-16 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] bg-clip-text text-transparent">
              {t('skills.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-100 hover:scale-[1.02]">
            <div className="w-12 h-12 bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L2 7l10 7 10-7-10-7zm0 14L2 21l10 7 10-7-10-7z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Frontend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• React</li>
              <li>• Next.js</li>
              <li>• TypeScript</li>
              <li>• HTML5 & CSS3</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:scale-[1.02]">
            <div className="w-12 h-12 bg-linear-to-r from-[#A8DF8E] to-[#FFAAB8] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 19v-2H6v-2h4V9H6V7h4V5h2v2h2V5h2v2h2v2h-2v6h2v2h-2v2h-2v-2h-2v2H10z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Backend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Node.js</li>
              <li>• RESTful APIs</li>
              <li>• Database Design</li>
              <li>• Server Architecture</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:scale-[1.02]">
            <div className="w-12 h-12 bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm-1-10H9v2h2v6h2v-6h2V9h-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Cloud & DevOps</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• AWS</li>
              <li>• Docker</li>
              <li>• CI/CD</li>
              <li>• Cloud Services</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up hover:scale-[1.02]">
            <div className="w-12 h-12 bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Tools & Practices</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Git & GitHub</li>
              <li>• Agile</li>
              <li>• Testing</li>
              <li>• Jira & Confluence</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="white">
        <div className="text-center mb-12 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t('contact.subtitle')}
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