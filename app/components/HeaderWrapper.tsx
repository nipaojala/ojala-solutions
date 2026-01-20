'use client';

import { useState, useEffect, ReactNode } from 'react';

interface HeaderWrapperProps {
  children: ReactNode;
  isMenuOpen: boolean;
}

export function HeaderWrapper({ children, isMenuOpen }: HeaderWrapperProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      {children}
    </header>
  );
}
