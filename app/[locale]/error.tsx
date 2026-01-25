'use client';

import {Link} from '@/app/i18n/navigation';

// Note: 'use client' is required for Next.js error components
// Error boundaries are React features that only work on the client side

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({error, reset}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-[#FFF2EF] to-[#FFF2EF] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1A2A4F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F7A5A5] rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-none">
          <span className="bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] bg-clip-text text-transparent">
            ⚠️
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Jotain meni pieleen!
        </h2>
        <div className="text-lg md:text-xl text-gray-600 mb-8">
          <p className="mb-2">Valitettavasti tapahtui virhe.</p>
          <p>Voit yrittää ladata sivun uudelleen tai palata etusivulle.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 bg-linear-to-r from-[#F7A5A5] to-[#1A2A4F] text-white hover:opacity-90 shadow-lg hover:shadow-xl"
          >
            Yritä uudelleen
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-[#F7A5A5] text-[#F7A5A5] hover:bg-[#F7A5A5] hover:text-white"
          >
            Takaisin etusivulle
          </Link>
        </div>
      </div>
    </div>
  );
}