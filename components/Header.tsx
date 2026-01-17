'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className={`flex items-center space-x-3 hover:opacity-80 transition-opacity ${
                isMenuOpen ? 'md:flex hidden' : ''
              }`}
              onClick={closeMenu}
            >
              <Image
                src="/logo_small.png"
                alt="Ojala Solutions Logo"
                width={40}
                height={40}
                priority
                className="w-10 h-10"
              />
              <span className="text-xl font-bold bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] bg-clip-text text-transparent">
                Ojala Solutions
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#about"
                className="text-gray-700 hover:text-[#FFAAB8] transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="/#skills"
                className="text-gray-700 hover:text-[#FFAAB8] transition-colors font-medium"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-[#FFAAB8] transition-colors font-medium"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
              >
                Contact
              </Link>
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-[#FFAAB8] transition-colors focus:outline-none z-[70] relative w-6 h-6 flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <svg
                  className={`absolute w-6 h-6 transition-opacity duration-200 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`absolute w-6 h-6 transition-opacity duration-200 ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-60 md:hidden bg-linear-to-b from-[#A8DF8E] via-[#F0FFDF] to-[#FFD8DF] flex flex-col pt-6"
          onClick={closeMenu}
        >
          <div className="flex-1 px-4 sm:px-6 pb-8 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo_small.png"
                  alt="Ojala Solutions Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-lg font-bold">
                  <span className="text-[#FFAAB8]">Ojala</span>{' '}
                  <span className="text-[#FFAAB8]">Solutions</span>
                </span>
              </div>
              <button
                onClick={closeMenu}
                className="text-gray-800 hover:text-[#FFAAB8] transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-6 mb-8">
              <Link
                href="/#about"
                onClick={closeMenu}
                className="block text-gray-800 hover:text-[#FFAAB8] transition-colors font-medium text-lg py-2"
              >
                About
              </Link>
              <Link
                href="/#skills"
                onClick={closeMenu}
                className="block text-gray-800 hover:text-[#FFAAB8] transition-colors font-medium text-lg py-2"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                onClick={closeMenu}
                className="block text-gray-800 hover:text-[#FFAAB8] transition-colors font-medium text-lg py-2"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                onClick={closeMenu}
                className="inline-block bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-lg mt-2"
              >
                Contact
              </Link>
            </nav>

            {/* Description */}
            <p className="text-gray-700 text-base mb-8 leading-relaxed">
              Professional software development with a focus on web technologies and AI.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-4">
              <Link
                href="/#contact"
                onClick={closeMenu}
                className="bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-center text-lg"
              >
                Get in Touch
              </Link>
              <Link
                href="/#about"
                onClick={closeMenu}
                className="border-2 border-[#FFAAB8] text-[#FFAAB8] px-6 py-3 rounded-full hover:bg-[#FFAAB8] hover:text-white transition-colors font-medium text-center text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
