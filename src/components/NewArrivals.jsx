import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { arrivals } from '../data/arrivalsData';

export default function NewArrivals({ onSelectProduct }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const touchStartX = useRef(null);

  // Dynamically update items per page based on viewport size
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setItemsPerPage(1);
      } else if (width < 768) {
        setItemsPerPage(2);
      } else if (width < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, arrivals.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (diffX > 40) {
      handleNext(); // Swiped left
    } else if (diffX < -40) {
      handlePrev(); // Swiped right
    }
    touchStartX.current = null;
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16 select-none bg-white">
      {/* Header Info */}
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase block">
          PREMIUM ACTION
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-neutral-900 uppercase">
          NEW ARRIVALS
        </h2>
        <p className="text-neutral-500 text-xs sm:text-sm md:text-[14px] leading-relaxed px-2">
          We are delighted to offer you pieces of the highest quality. A brand synonymous
          to them for their premium quality and enduring style. Click any product to explore full details.
        </p>
      </div>

      {/* Main Slider Row */}
      <div className="flex items-start">
        
        {/* Left Vertical Nav Indicator (Desktop) */}
        <div className="hidden md:flex flex-col items-center space-y-4 shrink-0 mr-6 lg:mr-8 text-neutral-400">
          <div className="w-4 h-4 rounded-full border border-neutral-900 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
          </div>
          <div className="w-px h-10 bg-neutral-200"></div>
          <button 
            onClick={handlePrev}
            className="text-[10px] tracking-[0.3em] font-black text-neutral-400 hover:text-black cursor-pointer transition-all duration-300 py-2 [writing-mode:vertical-lr] rotate-180 select-none hover:scale-105 active:scale-95 focus:outline-none"
          >
            PREVIOUS
          </button>
          <div className="w-px h-10 bg-neutral-200"></div>
          <button 
            onClick={handleNext}
            className="text-[10px] tracking-[0.3em] font-black text-neutral-400 hover:text-black cursor-pointer transition-all duration-300 py-2 [writing-mode:vertical-lr] rotate-180 select-none hover:scale-105 active:scale-95 focus:outline-none"
          >
            NEXT
          </button>
        </div>

        {/* Carousel Grid View with Swipe Support */}
        <div 
          className="flex-1 overflow-hidden py-2"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / arrivals.length)}%)`,
              width: `${(arrivals.length / itemsPerPage) * 100}%` 
            }}
          >
            {arrivals.map((item) => (
              <div 
                key={item.id} 
                className="px-2 sm:px-3 shrink-0"
                style={{ width: `${100 / arrivals.length}%` }}
              >
                <div 
                  onClick={() => onSelectProduct && onSelectProduct(item)}
                  className="flex flex-col group cursor-pointer text-left"
                >
                  {/* Card Container */}
                  <div className="w-full aspect-[3/3.8] rounded-xl sm:rounded-2xl overflow-hidden bg-[#f5f5f5] hover:bg-[#ebebeb] transition-all duration-300 relative flex items-end justify-center p-3 sm:p-4 group-hover:shadow-md">
                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[9px] font-extrabold tracking-widest bg-white/95 backdrop-blur-xs text-neutral-900 shadow-xs uppercase">
                        {item.badge}
                      </span>
                    )}

                    {/* View Details button overlay on hover */}
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <span className="px-4 py-2 bg-white text-neutral-900 rounded-full text-xs font-bold tracking-wider uppercase shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-neutral-100">
                        View Product
                      </span>
                    </div>

                    <img 
                      src={item.image} 
                      alt={item.name} 
                      draggable="false"
                      className="w-full h-[95%] object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Label & Pricing */}
                  <div className="mt-3 sm:mt-4 text-center">
                    <span className="block text-xs sm:text-sm font-bold tracking-wide text-neutral-800 group-hover:text-black transition-colors truncate">
                      {item.name}
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold text-neutral-500 mt-0.5 block">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Mobile / Tablet Horizontal Navigation Controls */}
      <div className="flex md:hidden items-center justify-between mt-6 px-2">
        <button 
          onClick={handlePrev}
          className="flex items-center space-x-1 text-xs font-bold tracking-wider text-neutral-700 hover:text-black bg-neutral-100 hover:bg-neutral-200 px-3 py-2 rounded-full transition-colors focus:outline-none"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>PREV</span>
        </button>
        
        {/* Step dots / indicator */}
        <div className="flex items-center space-x-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <span 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentIndex ? 'w-5 bg-neutral-900' : 'w-1.5 bg-neutral-300'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="flex items-center space-x-1 text-xs font-bold tracking-wider text-neutral-700 hover:text-black bg-neutral-100 hover:bg-neutral-200 px-3 py-2 rounded-full transition-colors focus:outline-none"
        >
          <span>NEXT</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
