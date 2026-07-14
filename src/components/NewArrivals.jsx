import React, { useState } from 'react';

const arrivals = [
  { id: 1, name: 'Shirts', image: '/images/shirts.png' },
  { id: 2, name: 'Jeans', image: '/images/jeans.png' },
  { id: 3, name: 'Fancy Top', image: '/images/fancy_top.png' },
  { id: 4, name: 'T-Shirts', image: '/images/tshirts.png' },
  { id: 5, name: 'Sweatshirts', image: '/images/sweatshirts.png' },
  { id: 6, name: 'Jacket', image: '/images/jacket.png' },
  { id: 7, name: 'Hoodies', image: '/images/hoodies.png' },
  { id: 8, name: 'Shorts', image: '/images/shorts.png' },
  { id: 9, name: 'Dress', image: '/images/dress.png' },
  { id: 10, name: 'Shoes', image: '/images/shoes.png' },
  { id: 11, name: 'Accessories', image: '/images/accessories.png' },
];

export default function NewArrivals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const maxIndex = arrivals.length - itemsPerPage;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // Loop to end
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop to start
    }
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-16 select-none bg-white">
      {/* Header Info */}
      <div className="text-center max-w-xl mx-auto mb-12 space-y-4">
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase block">
          PREMIUM ACTION
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-neutral-900 uppercase">
          NEW ARRIVALS
        </h2>
        <p className="text-neutral-500 text-sm sm:text-[14px] leading-relaxed">
          We are delighted to offer you pieces of the highest quality. A brand synonymous
          to them for their premium quality and enduring style.
        </p>
      </div>

      {/* Main Slider Row */}
      <div className="flex items-start">
        
        {/* Left Vertical Nav Indicator */}
        <div className="hidden md:flex flex-col items-center space-y-4 shrink-0 mr-8 text-neutral-400">
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

        {/* Carousel Grid View */}
        <div className="flex-1 overflow-hidden py-2">
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
                className="px-3 shrink-0"
                style={{ width: `${100 / arrivals.length}%` }}
              >
                <div className="flex flex-col group cursor-pointer">
                  {/* Card Container */}
                  <div className="w-full aspect-[3/3.8] rounded-2xl overflow-hidden bg-[#f5f5f5] hover:bg-[#ebebeb] transition-colors duration-300 relative flex items-end justify-center p-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      draggable="false"
                      className="w-full h-[95%] object-contain object-bottom transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                  {/* Card Label */}
                  <span className="mt-4 text-center text-sm font-semibold tracking-wide text-neutral-800 group-hover:text-black transition-colors">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
