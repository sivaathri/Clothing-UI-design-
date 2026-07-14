import React, { useState } from 'react';

const productsData = {
  'Fancy Top': [
    {
      id: 101,
      name: 'Striped Knit Bandeau Crop Top',
      image: '/images/fancy_top.png',
      price: 'Rs. 1,200.00',
      oldPrice: 'Rs. 1,500.00',
      onSale: true,
      colors: ['#c5a880', '#000000']
    },
    {
      id: 102,
      name: 'Sleeveless Ribbed T-Shirt',
      image: '/images/fancy_top.png',
      price: 'Rs. 1,250.00',
      onSale: false,
      colors: ['#ffffff', '#000000']
    },
    {
      id: 103,
      name: 'Snappy Crop Top',
      image: '/images/fancy_top.png',
      price: 'Rs. 650.00',
      oldPrice: 'Rs. 850.00',
      onSale: true,
      colors: ['#c5a880', '#000000']
    },
    {
      id: 104,
      name: 'Ruffle Strappy Crop Top With',
      image: '/images/fancy_top.png',
      price: 'Rs. 1,400.00',
      onSale: false,
      colors: ['#ffffff']
    },
    {
      id: 105,
      name: 'Ribbed Knit Summer Top',
      image: '/images/fancy_top.png',
      price: 'Rs. 950.00',
      oldPrice: 'Rs. 1,200.00',
      onSale: true,
      colors: ['#c5a880', '#ffffff']
    },
    {
      id: 106,
      name: 'Elegant Asymmetric Top',
      image: '/images/fancy_top.png',
      price: 'Rs. 1,600.00',
      onSale: false,
      colors: ['#000000', '#ffffff']
    }
  ],
  'Suits': [
    {
      id: 201,
      name: 'Tailored Blazer Jacket',
      image: '/images/jacket.png',
      price: 'Rs. 3,500.00',
      onSale: false,
      colors: ['#000000', '#808080']
    },
    {
      id: 202,
      name: 'Premium Wool Tuxedo',
      image: '/images/jacket.png',
      price: 'Rs. 7,800.00',
      oldPrice: 'Rs. 9,500.00',
      onSale: true,
      colors: ['#000000']
    },
    {
      id: 203,
      name: 'Casual Oversized Suit Jacket',
      image: '/images/jacket.png',
      price: 'Rs. 4,800.00',
      onSale: false,
      colors: ['#c5a880', '#000000']
    },
    {
      id: 204,
      name: 'Minimalist Charcoal Blazer',
      image: '/images/jacket.png',
      price: 'Rs. 4,200.00',
      onSale: false,
      colors: ['#808080']
    },
    {
      id: 205,
      name: 'Camel Autumn Blazer Pack',
      image: '/images/jacket.png',
      price: 'Rs. 3,900.00',
      oldPrice: 'Rs. 4,500.00',
      onSale: true,
      colors: ['#c5a880']
    },
    {
      id: 206,
      name: 'Modern Street Fit Tuxedo',
      image: '/images/jacket.png',
      price: 'Rs. 6,500.00',
      onSale: false,
      colors: ['#000000', '#ffffff']
    }
  ],
  'Pants': [
    {
      id: 301,
      name: 'Classic Slim Fit Jeans',
      image: '/images/jeans.png',
      price: 'Rs. 2,400.00',
      onSale: false,
      colors: ['#3b5998', '#000000']
    },
    {
      id: 302,
      name: 'Relaxed Utility Cargo Pants',
      image: '/images/jeans.png',
      price: 'Rs. 2,100.00',
      onSale: false,
      colors: ['#808080', '#000000']
    },
    {
      id: 303,
      name: 'Linen Summer Trousers',
      image: '/images/jeans.png',
      price: 'Rs. 1,800.00',
      oldPrice: 'Rs. 2,200.00',
      onSale: true,
      colors: ['#ffffff', '#c5a880']
    },
    {
      id: 304,
      name: 'Heavy Cotton Knit Pants',
      image: '/images/jeans.png',
      price: 'Rs. 1,950.00',
      onSale: false,
      colors: ['#000000', '#808080']
    },
    {
      id: 305,
      name: 'Washed Indigo Denim Jeans',
      image: '/images/jeans.png',
      price: 'Rs. 2,200.00',
      onSale: false,
      colors: ['#3b5998']
    },
    {
      id: 306,
      name: 'Minimal Utility Cargo',
      image: '/images/jeans.png',
      price: 'Rs. 1,700.00',
      oldPrice: 'Rs. 2,100.00',
      onSale: true,
      colors: ['#000000']
    }
  ],
  'Shorts': [
    {
      id: 401,
      name: 'Heavyweight Cotton Shorts',
      image: '/images/shorts.png',
      price: 'Rs. 1,200.00',
      onSale: false,
      colors: ['#000000', '#808080']
    },
    {
      id: 402,
      name: 'Linen Summer Shorts',
      image: '/images/shorts.png',
      price: 'Rs. 1,100.00',
      onSale: false,
      colors: ['#c5a880', '#ffffff']
    },
    {
      id: 403,
      name: 'Classic Denim Shorts',
      image: '/images/shorts.png',
      price: 'Rs. 1,300.00',
      oldPrice: 'Rs. 1,600.00',
      onSale: true,
      colors: ['#3b5998', '#ffffff']
    },
    {
      id: 404,
      name: 'Tailored Pleated Shorts',
      image: '/images/shorts.png',
      price: 'Rs. 1,450.00',
      onSale: false,
      colors: ['#000000', '#c5a880']
    },
    {
      id: 405,
      name: 'Athletic Sweat Shorts',
      image: '/images/shorts.png',
      price: 'Rs. 990.00',
      oldPrice: 'Rs. 1,250.00',
      onSale: true,
      colors: ['#808080', '#000000']
    },
    {
      id: 406,
      name: 'Urban Cargo Shorts Pack',
      image: '/images/shorts.png',
      price: 'Rs. 1,500.00',
      onSale: false,
      colors: ['#000000']
    }
  ]
};

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState('Fancy Top');
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  
  const currentProducts = productsData[activeTab] || [];
  const maxIndex = currentProducts.length - itemsPerPage;

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

  const selectTab = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0); // Reset sliding index on tab change
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-16 select-none bg-white">
      {/* Header Info */}
      <div className="text-center max-w-xl mx-auto mb-8 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-neutral-900 uppercase">
          BEST SELLERS
        </h2>
        <p className="text-neutral-500 text-sm sm:text-[14px] leading-relaxed">
          iboth combine a consultancy mindset inlined territories to create an initne as possible.
        </p>
      </div>

      {/* Tabs list */}
      <div className="flex justify-center space-x-6 sm:space-x-8 mb-12 border-b border-gray-100 pb-px">
        {Object.keys(productsData).map((tab) => (
          <button
            key={tab}
            onClick={() => selectTab(tab)}
            className={`text-sm font-semibold tracking-wide uppercase pb-3.5 transition-all duration-300 relative cursor-pointer ${
              activeTab === tab ? 'text-neutral-900 font-bold' : 'text-neutral-400 hover:text-neutral-700'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#a47e65]" />
            )}
          </button>
        ))}
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
            className="text-[10px] tracking-[0.3em] font-black text-neutral-400 hover:text-black cursor-pointer transition-all duration-300 py-2 [writing-mode:vertical-lr] rotate-180 select-none hover:scale-105 active:scale-95"
          >
            PREVIOUS
          </button>
          
          <div className="w-px h-10 bg-neutral-200"></div>
          {/* Dynamic Page Index Indicator */}
          <span className="text-[10px] tracking-[0.3em] font-black text-neutral-800 py-1 [writing-mode:vertical-lr] rotate-180 select-none">
            {currentIndex + 1} X {maxIndex + 1}
          </span>
          <div className="w-px h-10 bg-neutral-200"></div>

          <button 
            onClick={handleNext}
            className="text-[10px] tracking-[0.3em] font-black text-neutral-400 hover:text-black cursor-pointer transition-all duration-300 py-2 [writing-mode:vertical-lr] rotate-180 select-none hover:scale-105 active:scale-95"
          >
            NEXT
          </button>
        </div>

        {/* Carousel Grid View */}
        <div className="flex-1 overflow-hidden py-2">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / currentProducts.length)}%)`,
              width: `${(currentProducts.length / itemsPerPage) * 100}%` 
            }}
          >
            {currentProducts.map((item) => (
              <div 
                key={item.id} 
                className="px-3 shrink-0"
                style={{ width: `${100 / currentProducts.length}%` }}
              >
                <div className="flex flex-col group cursor-pointer">
                  {/* Card Container */}
                  <div className="w-full aspect-[3/3.8] rounded-2xl overflow-hidden bg-[#f5f5f5] hover:bg-[#ebebeb] transition-colors duration-300 relative flex items-end justify-center p-4">
                    {/* Vertical Sale Tag */}
                    {item.onSale && (
                      <div className="absolute top-0 left-4 bg-[#e53e3e] text-white text-[9px] font-black uppercase tracking-widest px-1.5 py-3.5 z-10 flex flex-col items-center justify-center leading-none">
                        <span>S</span>
                        <span>A</span>
                        <span>L</span>
                        <span>E</span>
                      </div>
                    )}
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      draggable="false"
                      className="w-full h-[95%] object-contain object-bottom transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                  {/* Card Labels & Meta info */}
                  <div className="mt-4 flex flex-col items-center space-y-2">
                    <span className="text-center text-[13px] font-semibold text-neutral-800 group-hover:text-black transition-colors line-clamp-1">
                      {item.name}
                    </span>
                    {/* Pricing */}
                    <div className="flex items-center text-xs">
                      {item.oldPrice && (
                        <span className="text-neutral-400 line-through mr-2">{item.oldPrice}</span>
                      )}
                      <span className="font-bold text-neutral-800">{item.price}</span>
                    </div>
                    {/* Color Swatches */}
                    <div className="flex items-center space-x-2 pt-1">
                      {item.colors.map((color, cIdx) => (
                        <span 
                          key={cIdx} 
                          className="w-3.5 h-3.5 rounded-full border border-neutral-300"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centered View All Products Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#a47e65] hover:bg-neutral-900 text-white text-xs font-bold tracking-[0.25em] uppercase px-10 py-4 transition-colors duration-300 cursor-pointer shadow-sm active:scale-98 select-none">
          ALL PRODUCTS
        </button>
      </div>
    </section>
  );
}
