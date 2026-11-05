import React from 'react';

const categories = [
  { name: 'Dress', image: '/images/dress.png' },
  { name: 'Shoes', image: '/images/shoes.png' },
  { name: 'Accessories', image: '/images/accessories.png' },
  { name: 'Jeans', image: '/images/jeans.png' },
  { name: 'Fancy Top', image: '/images/fancy_top.png' },
  { name: 'T-Shirts', image: '/images/tshirts.png' },
  { name: 'Shirts', image: '/images/shirts.png' },
  { name: 'Sweatshirts', image: '/images/sweatshirts.png' },
  { name: 'Jacket', image: '/images/jacket.png' },
  { name: 'Hoodies', image: '/images/hoodies.png' },
  { name: 'Shorts', image: '/images/shorts.png' },
];

export default function Categories() {
  return (
    <section className="w-full pt-3 sm:pt-5 pb-3 sm:pb-4 border-b border-gray-100 bg-white select-none">
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start xl:justify-center min-w-max xl:min-w-0 mx-auto px-4 sm:px-6 py-1 gap-3.5 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          {categories.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center flex-shrink-0 group cursor-pointer"
            >
              {/* Outer Ring and White Space */}
              <div className="relative rounded-full p-[2px] sm:p-[2.5px] border border-gray-200 group-hover:border-black transition-colors duration-300">
                {/* White Inner Space / Border */}
                <div className="rounded-full overflow-hidden w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 border border-white sm:border-2 bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    draggable="false"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                </div>
              </div>
              {/* Label */}
              <span className="mt-2 text-[11px] sm:text-xs lg:text-[13px] font-medium text-gray-800 group-hover:text-black transition-colors duration-200 whitespace-nowrap text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
