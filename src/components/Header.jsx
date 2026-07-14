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
            <div key={item.name} className="relative group py-2">
              <button className="flex items-center text-[15px] font-medium text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer">
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="w-4.5 h-4.5 ml-1 text-gray-400 group-hover:text-black transition-transform duration-300 group-hover:rotate-180" />
                )}
              </button>
              {item.hasDropdown && (
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
