import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Projects | Ojala Solutions - Portfolio & Case Studies',
  description: 'Explore projects by Niilo Ojala: Approt.app (digital student bar crawl passes) and Isofan (energy-efficient LVI systems company website with savings calculator). Built with React, Next.js, and modern web technologies.',
  keywords: [
    'portfolio',
    'projects',
    'case studies',
    'Approt.app',
    'Isofan',
    'web development projects',
    'React projects',
    'Next.js projects',
    'student app',
    'energy calculator',
    'Niilo Ojala projects',
    'Ojala Solutions portfolio',
  ],
  authors: [{ name: 'Niilo Ojala' }],
  creator: 'Niilo Ojala',
  openGraph: {
    title: 'Projects | Ojala Solutions - Portfolio & Case Studies',
    description: 'Explore projects by Niilo Ojala: Approt.app and Isofan. Built with React, Next.js, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ojala Solutions',
    url: 'https://ojala-solutions.com/projects',
    images: [
      {
        url: '/approt_main_picture.webp',
        width: 1200,
        height: 630,
        alt: 'Approt.app Project',
      },
      {
        url: '/isofan_frontpage.png',
        width: 1200,
        height: 630,
        alt: 'Isofan Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Ojala Solutions - Portfolio & Case Studies',
    description: 'Explore projects by Niilo Ojala: Approt.app and Isofan. Built with React, Next.js, and modern web technologies.',
    images: ['/approt_main_picture.webp'],
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
    canonical: 'https://ojala-solutions.com/projects',
  },
  category: 'Portfolio',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Section background="gradient" className="min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up delay-100">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
              A showcase of my recent work and contributions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Approt App Project */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-200">
              <div className="relative h-64 md:h-80 bg-linear-to-br from-[#F0FFDF] to-[#FFD8DF] overflow-hidden">
                <Image
                  src="/approt_main_picture.webp"
                  alt="Approt App - Desktop view"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-gray-800">Approt.app</h2>
                  <span className="px-3 py-1 bg-[#F0FFDF] text-[#A8DF8E] rounded-full text-sm font-medium">
                    Web App
                  </span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Digital solution for student bar crawl events. Replaces physical appro-passes with a modern, 
                  paperless system that eliminates lost stamps, complex logistics, and long queues.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Key Features:</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Digital appro-passes and QR code scanning</li>
                    <li>• Real-time event tracking and analytics</li>
                    <li>• Interactive maps with location tracking</li>
                    <li>• Admin dashboard for event organizers</li>
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
                    className="flex-1 bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-center"
                  >
                    View Project
                  </a>
                </div>
              </div>
              
              {/* Mobile Screenshot */}
              <div className="px-8 pb-8">
                <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src="/approt_mobile.png"
                    alt="Approt App - Mobile view"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>

            {/* Isofan Project */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up delay-300">
              <div className="relative h-64 md:h-80 bg-linear-to-br from-[#F0FFDF] to-[#FFD8DF] overflow-hidden">
                <Image
                  src="/isofan_frontpage.png"
                  alt="Isofan - Company website"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-gray-800">Isofan</h2>
                  <span className="px-3 py-1 bg-[#FFD8DF] text-[#FFAAB8] rounded-full text-sm font-medium">
                    Corporate Website
                  </span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Company website for LVI systems importer specializing in energy-efficient solutions. 
                  Features an interactive energy savings calculator and comprehensive product information.
                </p>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Key Features:</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Interactive energy savings calculator</li>
                    <li>• Product catalog and specifications</li>
                    <li>• Responsive design for all devices</li>
                    <li>• Modern UI with smooth animations</li>
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
                    className="flex-1 bg-linear-to-r from-[#A8DF8E] to-[#FFAAB8] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-center"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* Mobile Screenshots Gallery */}
              <div className="px-8 pb-8 space-y-4">
                <div className="relative h-64 bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                      src="/isofan_ilmanpuhdistus.png"
                      alt="Isofan - Air purification"
                      fill
                      className="object-contain p-3"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-48 bg-gray-100 rounded-2xl overflow-hidden">
                    <Image
                      src="/isofan_mobile_suodattimet.png"
                      alt="Isofan - Mobile filters"
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                  <div className="relative h-48 bg-gray-100 rounded-2xl overflow-hidden">
                   
                    <Image
                    src="/isofan_mobile_iilmankierratys.png"
                    alt="Isofan - Mobile air circulation"
                    fill
                    className="object-contain p-4"
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center animate-fade-in-up delay-400">
            <Link
              href="/"
              className="inline-block border-2 border-[#FFAAB8] text-[#FFAAB8] px-8 py-3 rounded-full hover:bg-[#FFAAB8] hover:text-white transition-colors font-medium text-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
