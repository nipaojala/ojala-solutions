"use client";

import { useState, ReactNode, cloneElement, isValidElement } from "react";
import { HeaderWrapper } from "./HeaderWrapper";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

interface HeaderClientProps {
  logo: ReactNode;
  desktopNav: ReactNode;
  mobileMenuContent: ReactNode;
}

export default function HeaderClient({
  logo,
  desktopNav,
  mobileMenuContent,
}: HeaderClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add closeMenu handler to logo if it's a Link
  const logoWithHandler =
    isValidElement(logo) && logo.type
      ? cloneElement(logo as React.ReactElement<{ onClick?: () => void }>, {
          onClick: closeMenu,
        })
      : logo;

  return (
    <>
      <HeaderWrapper isMenuOpen={isMenuOpen}>
        <nav className="max-w-7xl mx-auto px-4 pr-4 md:pr-0">
          <div className="flex items-center justify-center md:justify-between h-20 md:gap-0 gap-6">
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
