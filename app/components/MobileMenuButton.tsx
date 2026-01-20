'use client';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="md:hidden text-gray-700 hover:text-[#FFAAB8] transition-colors focus:outline-none z-70 relative w-6 h-6 flex items-center justify-center"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <svg
          className={`absolute w-6 h-6 transition-opacity duration-200 ${
            isOpen ? 'opacity-0' : 'opacity-100'
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
            isOpen ? 'opacity-100' : 'opacity-0'
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
  );
}
