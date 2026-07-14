import React from 'react';

const categories = [
  { name: 'Shirts', image: '/images/shirts.png' },
  { name: 'Jeans', image: '/images/jeans.png' },
  { name: 'Fancy Top', image: '/images/fancy_top.png' },
  { name: 'T-Shirts', image: '/images/tshirts.png' },
  { name: 'Sweatshirts', image: '/images/sweatshirts.png' },
  { name: 'Jacket', image: '/images/jacket.png' },
  { name: 'Hoodies', image: '/images/hoodies.png' },
  { name: 'Shorts', image: '/images/shorts.png' },
  { name: 'Dress', image: '/images/dress.png' },
  { name: 'Shoes', image: '/images/shoes.png' },
  { name: 'Accessories', image: '/images/accessories.png' },
  { name: 'Jeans', image: '/images/jeans.png' },
  { name: 'Fancy Top', image: '/images/fancy_top.png' },
  { name: 'T-Shirts', image: '/images/tshirts.png' },
  { name: 'Shirts', image: '/images/shirts.png' },
  { name: 'Jeans', image: '/images/jeans.png' },
  { name: 'Fancy Top', image: '/images/fancy_top.png' },
  { name: 'T-Shirts', image: '/images/tshirts.png' },
  { name: 'Sweatshirts', image: '/images/sweatshirts.png' },
  { name: 'Jacket', image: '/images/jacket.png' },
  { name: 'Hoodies', image: '/images/hoodies.png' },
  { name: 'Shorts', image: '/images/shorts.png' },
  { name: 'Dress', image: '/images/dress.png' },
  { name: 'Shoes', image: '/images/shoes.png' },
  { name: 'Accessories', image: '/images/accessories.png' },
  { name: 'Jeans', image: '/images/jeans.png' },
  { name: 'Fancy Top', image: '/images/fancy_top.png' },
  { name: 'T-Shirts', image: '/images/tshirts.png' },
];

export default function Categories() {
  // Duplicate categories to create a seamless looping marquee
  const doubleCategories = [...categories, ...categories];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 pt-5 pb-2.5 border-b border-gray-100 overflow-hidden bg-white select-none">
      <div className="w-full">
        <div className="relative w-full overflow-hidden">
          {/* Scrolling Track - No gap on track, padding is on the child elements */}
          <div className="flex animate-marquee pt-4 pb-2">
            {doubleCategories.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center flex-shrink-0 px-3 sm:px-4 group cursor-pointer"
              >
                {/* Outer Ring and White Space */}
                <div className="relative rounded-full p-[2.5px] border border-gray-200 group-hover:border-black transition-colors duration-300">
                  {/* White Inner Space / Border */}
                  <div className="rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24 border-2 border-white bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      draggable="false"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                  </div>
                </div>
                {/* Label */}
                <span className="mt-2.5 text-xs sm:text-[13px] font-medium text-gray-800 group-hover:text-black transition-colors duration-200">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
