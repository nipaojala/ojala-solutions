'use client';

import { useState, ReactNode, cloneElement, isValidElement } from 'react';
import { HeaderWrapper } from './HeaderWrapper';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

interface HeaderClientProps {
  logo: ReactNode;
  desktopNav: ReactNode;
  mobileMenuContent: ReactNode;
}

export default function HeaderClient({ logo, desktopNav, mobileMenuContent }: HeaderClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add closeMenu handler to logo if it's a Link
  const logoWithHandler = isValidElement(logo) && logo.type
    ? cloneElement(logo as React.ReactElement<{ onClick?: () => void }>, { 
        onClick: closeMenu 
      })
    : logo;

  return (
    <>
      <HeaderWrapper isMenuOpen={isMenuOpen}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {logoWithHandler}
            {desktopNav}
            <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </nav>
      </HeaderWrapper>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu}>
        {mobileMenuContent}
      </MobileMenu>
    </>
  );
}
