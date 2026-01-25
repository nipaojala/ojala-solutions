'use client';

import { ReactNode } from 'react';
import MobileMenuContent from './MobileMenuContent';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function MobileMenu({ isOpen, onClose, children }: MobileMenuProps) {
  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-20 left-0 right-0 bottom-0 z-40 md:hidden bg-linear-to-b from-white to-[#FFF2EF] flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      >
        <div className="flex-1 px-4 sm:px-6 pb-8 overflow-y-auto pt-6" onClick={(e) => e.stopPropagation()}>
          <MobileMenuContent onClose={onClose}>
            {children}
          </MobileMenuContent>
        </div>
      </div>
    </>
  );
}
