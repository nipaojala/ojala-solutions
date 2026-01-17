import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Ojala Solutions | Professional Software Development Services',
  description: 'Professional software development services by Niilo Ojala. 3+ years of experience in banking software, AI, and web technologies. Specialized in React, Node.js, TypeScript, and cloud services. Based in Finland.',
  keywords: [
    'software development',
    'web development',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'banking software',
    'AI',
    'machine learning',
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
  openGraph: {
    title: 'Ojala Solutions | Professional Software Development Services',
    description: 'Professional software development services by Niilo Ojala. 3+ years of experience in banking software, AI, and web technologies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ojala Solutions',
    url: 'https://ojala-solutions.com',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ojala Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ojala Solutions | Professional Software Development Services',
    description: 'Professional software development services by Niilo Ojala. 3+ years of experience in banking software, AI, and web technologies.',
    images: ['/logo.png'],
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
    canonical: 'https://ojala-solutions.com',
  },
  category: 'Technology',
};

export default function Home() {
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
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in-up delay-200">
                Professional software development with a focus on web technologies and AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Button href="#contact" variant="primary">
                  Get in Touch
                </Button>
                <Button href="#about" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-slide-in-right delay-100">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-linear-to-r from-[#A8DF8E] to-[#FFAAB8] rounded-3xl transform rotate-3 blur-xl opacity-30"></div>
                <Image
                  src="/logo.png"
                  alt="Ojala Solutions Logo"
                  width={500}
                  height={500}
                  className="relative rounded-3xl shadow-2xl"
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
                About Me
              </span>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                I'm <strong>Niilo Ojala</strong>, a 28-year-old software developer with 3 years of professional experience at <strong>Osuuspankki</strong>, one of Finland's leading banks.
              </p>
              <p className="text-lg">
                My journey in software development has been driven by a passion for creating innovative solutions. I hold a major in <strong>Computer Science from Aalto University</strong>, where I specialized in web technologies.
              </p>
              <p className="text-lg">
                During my time at Osuuspankki, I've worked on cutting-edge banking software solutions, and I completed my thesis on <strong>AI and banking software</strong>, combining my interests in artificial intelligence and fintech.
              </p>
              <p className="text-lg">
                Beyond my professional work, I've completed countless personal projects that have helped me explore new technologies and expand my skill set.
              </p>
              <p className="text-lg text-gray-600 italic">
                In my leisure time, I enjoy skateboarding and playing the piano, which helps me maintain a balanced and creative mindset.
              </p>
            </div>
          </div>
          <div className="flex justify-center animate-slide-in-right delay-200">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] rounded-2xl transform -rotate-3 blur-xl opacity-20"></div>
              <Image
                src="/profilePic.jpg"
                alt="Niilo Ojala"
                width={400}
                height={500}
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
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up delay-100 hover:scale-105  duration-300">
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
              <li>• Tailwind CSS</li>
              <li>• HTML5 & CSS3</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up delay-200 hover:scale-105  duration-300">
            <div className="w-12 h-12 bg-linear-to-r from-[#A8DF8E] to-[#FFAAB8] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 19v-2H6v-2h4V9H6V7h4V5h2v2h2V5h2v2h2v2h-2v6h2v2h-2v2h-2v-2h-2v2H10z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Backend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Node.js</li>
              <li>• Express</li>
              <li>• RESTful APIs</li>
              <li>• Database Design</li>
              <li>• Server Architecture</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up delay-300 hover:scale-105  duration-300">
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
              <li>• Infrastructure as Code</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up delay-400 hover:scale-105  duration-300">
            <div className="w-12 h-12 bg-linear-to-r from-[#A8DF8E] to-[#FFAAB8] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">AI & Machine Learning</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• AI Integration</li>
              <li>• Banking Software</li>
              <li>• Machine Learning</li>
              <li>• Data Analysis</li>
              <li>• Algorithm Design</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up delay-500 hover:scale-105  duration-300">
            <div className="w-12 h-12 bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Tools & Practices</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Git & GitHub</li>
              <li>• Agile/Scrum</li>
              <li>• Testing</li>
              <li>• Code Review</li>
              <li>• Documentation</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up delay-600 hover:scale-105  duration-300">
            <div className="w-12 h-12 bg-linear-to-r from-[#A8DF8E] to-[#FFAAB8] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Finance & Banking</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Fintech Solutions</li>
              <li>• Banking Software</li>
              <li>• Security Best Practices</li>
              <li>• Compliance</li>
              <li>• Financial Systems</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="white">
        <div className="text-center mb-12 animate-fade-in-up delay-100">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and bring your ideas to life.
          </p>
        </div>
        <ContactForm />
      </Section>

      <Footer />
    </div>
  );
}
