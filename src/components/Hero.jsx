import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, MapPin, CheckCircle } from 'lucide-react';

const slides = [
  {
    id: 0,
    subtitle: 'NEW COLLECTION',
    heading: 'TRENDS & LOOK',
    paragraph: 'Elevate your style with our curated collection of trending outfits for every occasion.',
    buttonText: 'SHOP NEW COLLECTION',
    image: '/images/hero_beach.png',
    align: 'right'
  },
  {
    id: 1,
    subtitle: 'PREMIUM JACKETS',
    heading: 'URBAN OUTWEAR',
    paragraph: 'Stay warm and stylish with our heavy-weight cotton jackets and oversized layering staples.',
    buttonText: 'EXPLORE JACKETS',
    image: '/images/jacket.png',
    align: 'left'
  },
  {
    id: 2,
    subtitle: 'SUMMER ESSENTIALS',
    heading: 'EASY BREEZY',
    paragraph: 'Discover lightweight linen pieces designed to keep you cool during warmer months.',
    buttonText: 'SHOP THE ESSENTIALS',
    image: '/images/sweatshirts.png',
    align: 'right'
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  // Auto-advance slides every 8 seconds unless hovered/interacted
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const current = slides[activeSlide];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 pb-12 select-none">
      <div className="relative w-full aspect-[16/8] md:aspect-[21/9] min-h-[480px] sm:min-h-[520px] rounded-[2rem] overflow-hidden bg-neutral-100 shadow-sm transition-all duration-700">
        
        {/* Slide Images */}
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background image overlay to make text readable */}
            <div className="absolute inset-0 bg-black/10 z-10"></div>
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover object-center scale-100 transition-transform duration-[8000ms] ease-out"
              style={{ transform: idx === activeSlide ? 'scale(1.05)' : 'scale(1)' }}
            />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex items-center px-8 sm:px-16 md:px-24">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 h-full items-center">
            
            {/* Empty space for alignment when text is right-aligned */}
            <div className={`${current.align === 'right' ? 'hidden md:block' : 'hidden'}`}></div>

            {/* Text panel */}
            <div 
              className={`flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-5 md:space-y-6 ${
                current.align === 'right' ? 'md:pl-16' : 'md:pr-16'
              }`}
            >
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.3em] text-neutral-800 uppercase block drop-shadow-sm">
                {current.subtitle}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.05] drop-shadow-sm font-sans">
                {current.heading}
              </h2>
              <p className="text-neutral-800 text-sm sm:text-base max-w-sm leading-relaxed font-medium drop-shadow-sm">
                {current.paragraph}
              </p>
              <div className="pt-2">
                <a
                  href="#"
                  className="inline-block px-8 py-3.5 bg-black text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-neutral-900 active:scale-98 transition-all shadow-md rounded-none"
                >
                  {current.buttonText}
                </a>
              </div>
            </div>

            {/* Empty space for alignment when text is left-aligned */}
            <div className={`${current.align === 'left' ? 'hidden md:block' : 'hidden'}`}></div>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-neutral-900 rounded-full flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-neutral-900 rounded-full flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Indicator Dots / Pills */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeSlide ? 'w-8 bg-black' : 'w-4 bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom Left Notification overlay */}
        {showNotification && (
          <div className="absolute bottom-6 left-6 z-30 hidden md:flex items-center bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/50 w-72 max-w-xs transition-all duration-300 hover:shadow-2xl">
            {/* Thumbnail */}
            <div className="w-12 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-3 border border-neutral-100">
              <img
                src="/images/mini_blazer.png"
                alt="Blazer Look"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0 pr-4">
              <span className="text-[10px] text-neutral-400 font-medium block">
                Someone recently bought
              </span>
              <span className="text-xs font-bold text-neutral-900 truncate block mt-0.5">
                Leather Oversize Blazer
              </span>
              <div className="flex items-center text-[10px] text-neutral-500 mt-1">
                <MapPin className="w-3 h-3 text-neutral-400 mr-0.5" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center text-[9px] text-green-600 font-semibold mt-0.5">
                <CheckCircle className="w-3 h-3 text-green-500 mr-0.5" />
                <span>2 minutes ago</span>
              </div>
            </div>
            {/* Close action */}
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 text-neutral-400 hover:text-black transition-colors cursor-pointer"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom Right lookbook preview grid */}
        <div className="absolute bottom-6 right-6 z-30 hidden md:block">
          <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-white/50 w-36 hover:scale-103 transition-transform cursor-pointer">
            <img
              src="/images/mini_lookbook.png"
              alt="Mini lookbook preview"
              className="w-full rounded-xl object-cover border border-neutral-100"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
