import Link from 'next/link';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-[#F0FFDF] to-[#FFD8DF] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A8DF8E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFAAB8] rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <h1 className="text-9xl md:text-[12rem] font-bold mb-4 leading-none">
          <span className="bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] bg-clip-text text-transparent">
            404
          </span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Sivua ei löytynyt
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Haettyä sivua ei löytynyt tai se on siirretty.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 bg-linear-to-r from-[#FFAAB8] to-[#A8DF8E] text-white hover:opacity-90 shadow-lg hover:shadow-xl"
        >
          Palaa etusivulle
        </Link>
      </div>
    </div>
  );
}