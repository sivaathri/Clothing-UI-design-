import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Shop', hasDropdown: true },
    { name: 'Men', hasDropdown: true },
    { name: 'Women', hasDropdown: true },
    { name: 'Collections', hasDropdown: true },
    { name: 'Product', hasDropdown: true },
    { name: 'Blog', hasDropdown: false },
    { name: 'Pages', hasDropdown: true },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-bold tracking-[0.25em] text-gray-900 select-none hover:opacity-80 transition-opacity">
            ARLUNE
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className={`${item.name === 'Shop' ? '' : 'relative'} group py-2`}
            >
              <button className="flex items-center text-[15px] font-medium text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer">
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="w-4.5 h-4.5 ml-1 text-gray-400 group-hover:text-black transition-transform duration-300 group-hover:rotate-180" />
                )}
              </button>

              {/* Mega Dropdown Menu for Shop */}
              {item.hasDropdown && item.name === 'Shop' && (
                <div className="absolute top-full left-0 right-0 w-full bg-white border-b border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 grid grid-cols-4 gap-8 divide-x divide-gray-100 text-left">
                    
                    {/* Column 1: Shop By Category */}
                    <div className="pr-4">
                      <div className="mb-6">
                        <h3 className="text-xs font-bold tracking-[0.2em] text-neutral-900 uppercase pb-2 border-b border-black inline-block">
                          SHOP BY CATEGORY
                        </h3>
                      </div>
                      <ul className="space-y-3.5 text-[14px] text-neutral-500 font-medium">
                        <li><a href="#" className="hover:text-black transition-colors block">Fancy Top</a></li>
                        <li><a href="#" className="hover:text-black transition-colors block">Jacket</a></li>
                        <li><a href="#" className="hover:text-black transition-colors block">Jeans</a></li>
                        <li><a href="#" className="hover:text-black transition-colors block">Men's Shorts</a></li>
                        <li><a href="#" className="hover:text-black transition-colors block">Pants</a></li>
                        <li><a href="#" className="hover:text-black transition-colors block">Shirts</a></li>
                        <li><a href="#" className="hover:text-black transition-colors block">Shorts</a></li>
                        <li><a href="#" className="hover:text-black transition-colors block">Sweatshirts</a></li>
                        <li><a href="#" className="hover:text-black transition-colors block">T-Shirts</a></li>
                      </ul>
                    </div>

                    {/* Column 2: Trending */}
                    <div className="pl-8 pr-4">
                      <div className="mb-6">
                        <h3 className="text-xs font-bold tracking-[0.2em] text-neutral-900 uppercase pb-2 border-b border-black inline-block">
                          TRENDING
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                        <div className="flex flex-col items-center text-center group/item cursor-pointer">
                          <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100 p-0.5 group-hover/item:border-black transition-colors duration-300">
                            <img src="/images/shirts.png" alt="Shirts" className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover/item:scale-105" />
                          </div>
                          <span className="mt-2 text-xs font-medium text-neutral-600 group-hover/item:text-black transition-colors">Shirts</span>
                        </div>
                        <div className="flex flex-col items-center text-center group/item cursor-pointer">
                          <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100 p-0.5 group-hover/item:border-black transition-colors duration-300">
                            <img src="/images/fancy_top.png" alt="Fancy Top" className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover/item:scale-105" />
                          </div>
                          <span className="mt-2 text-xs font-medium text-neutral-600 group-hover/item:text-black transition-colors">Fancy Top</span>
                        </div>
                        <div className="flex flex-col items-center text-center group/item cursor-pointer">
                          <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100 p-0.5 group-hover/item:border-black transition-colors duration-300">
                            <img src="/images/jacket.png" alt="Pants" className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover/item:scale-105" />
                          </div>
                          <span className="mt-2 text-xs font-medium text-neutral-600 group-hover/item:text-black transition-colors">Pants</span>
                        </div>
                        <div className="flex flex-col items-center text-center group/item cursor-pointer">
                          <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100 p-0.5 group-hover/item:border-black transition-colors duration-300">
                            <img src="/images/shorts.png" alt="Shorts" className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover/item:scale-105" />
                          </div>
                          <span className="mt-2 text-xs font-medium text-neutral-600 group-hover/item:text-black transition-colors">Shorts</span>
                        </div>
                      </div>
                    </div>

                    {/* Column 3: More to Explore */}
                    <div className="pl-8 pr-4">
                      <div className="mb-6">
                        <h3 className="text-xs font-bold tracking-[0.2em] text-neutral-900 uppercase pb-2 border-b border-black inline-block">
                          MORE TO EXPLORE
                        </h3>
                      </div>
                      <div className="space-y-4">
                        {[
                          { name: 'Fancy Top', img: '/images/fancy_top.png' },
                          { name: 'Jacket', img: '/images/jacket.png' },
                          { name: 'Jeans', img: '/images/jeans.png' },
                          { name: 'Men\'s Shorts', img: '/images/shorts.png' },
                          { name: 'Pants', img: '/images/shirts.png' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-3 group/explore cursor-pointer">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 p-0.5 group-hover/explore:border-black transition-colors duration-300">
                              <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-full" />
                            </div>
                            <span className="text-xs font-semibold text-neutral-500 group-hover/explore:text-black transition-colors">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 4: Featured */}
                    <div className="pl-8">
                      <div className="mb-6">
                        <h3 className="text-xs font-bold tracking-[0.2em] text-neutral-900 uppercase pb-2 border-b border-black inline-block">
                          FEATURED
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { name: 'SHIRTS', img: '/images/shirts.png' },
                          { name: 'MEN\'S SHORTS', img: '/images/shorts.png' },
                          { name: 'JACKET', img: '/images/jacket.png' },
                          { name: 'SWEATSHIRTS', img: '/images/sweatshirts.png' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-[#f8f8f8] pl-4 pr-1 py-1 h-[90px] rounded-sm group/banner cursor-pointer hover:bg-neutral-100 transition-colors">
                            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-neutral-800 group-hover/banner:text-black transition-colors">
                              {item.name}
                            </span>
                            <div className="w-14 h-full overflow-hidden shrink-0 ml-2">
                              <img src={item.img} alt={item.name} className="w-full h-full object-contain object-bottom scale-95 group-hover/banner:scale-100 transition-transform duration-300" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Standard Dropdowns for other links */}
              {item.hasDropdown && item.name !== 'Shop' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors">New Arrivals</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors">Best Sellers</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors">Trending</a>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-700 hover:text-black p-1 transition-colors cursor-pointer" aria-label="Search">
            <Search className="w-5.5 h-5.5 stroke-[1.5]" />
          </button>
          
          <button className="text-gray-700 hover:text-black p-1 transition-colors cursor-pointer" aria-label="Account">
            <User className="w-5.5 h-5.5 stroke-[1.5]" />
          </button>

          {/* Wishlist */}
          <button className="relative text-gray-700 hover:text-black p-1 transition-colors cursor-pointer" aria-label="Wishlist">
            <Heart className="w-5.5 h-5.5 stroke-[1.5]" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full border border-white">
              2
            </span>
          </button>

          {/* Cart */}
          <button className="flex items-center space-x-1.5 text-gray-700 hover:text-black p-1 transition-colors cursor-pointer" aria-label="Cart">
            <span className="text-[15px] font-medium hidden sm:inline">Cart</span>
            <div className="relative">
              <ShoppingBag className="w-5.5 h-5.5 stroke-[1.5]" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full border border-white">
                3
              </span>
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-black p-1 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white py-4 px-6 absolute left-0 right-0 shadow-lg z-50">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-50 pb-2">
                <button className="flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-black py-1">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
                {item.hasDropdown && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                    <a href="#" className="block text-sm text-gray-500 hover:text-black">New Arrivals</a>
                    <a href="#" className="block text-sm text-gray-500 hover:text-black">Best Sellers</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
