'use client';

import { ReactNode, useEffect } from 'react';

interface MobileMenuContentProps {
  children: ReactNode;
  onClose: () => void;
}

export default function MobileMenuContent({ children, onClose }: MobileMenuContentProps) {
  // Close menu when any link is clicked
  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href]')) {
        onClose();
      }
    };

    const container = document.querySelector('[data-mobile-menu-content]') as HTMLElement | null;
    if (container) {
      container.addEventListener('click', handleLinkClick);
      return () => container.removeEventListener('click', handleLinkClick);
    }
  }, [onClose]);

  return (
    <div data-mobile-menu-content>
      {children}
    </div>
  );
}
