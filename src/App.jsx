import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header component */}
      <Header />

      {/* Categories navigation slider */}
      <Categories />

      {/* Main Promo / Hero Showcase */}
      <main className="w-full px-4 sm:px-8 lg:px-12 py-12">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-50 px-8 py-16 sm:px-16 md:py-24 flex items-center min-h-[450px]">
          {/* Decorative design gradients */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[450px] h-[450px] rounded-full bg-neutral-100/70 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[450px] h-[450px] rounded-full bg-neutral-200/40 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-lg space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase block">
              Summer Collection 2026
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-[1.1]">
              Effortless <br />
              <span className="font-semibold">Simplicity</span>
            </h1>
            <p className="text-neutral-500 text-sm sm:text-base max-w-sm leading-relaxed">
              Curated wardrobe staples crafted from sustainable materials, designed to last and move with you.
            </p>
            <div className="pt-2">
              <a
                href="#"
                className="inline-block px-8 py-4 bg-neutral-900 text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors rounded-sm shadow-sm"
              >
                Shop New Arrivals
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
