import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronDown, Menu, X, ChevronRight } from 'lucide-react';

const allProducts = [
  { name: 'Shirts', image: '/images/shirts.png', price: 'Rs. 1,500.00' },
  { name: 'Jeans', image: '/images/jeans.png', price: 'Rs. 2,400.00' },
  { name: 'Fancy Top', image: '/images/fancy_top.png', price: 'Rs. 1,200.00' },
  { name: 'T-Shirts', image: '/images/tshirts.png', price: 'Rs. 1,250.00' },
  { name: 'Sweatshirts', image: '/images/sweatshirts.png', price: 'Rs. 1,800.00' },
  { name: 'Jacket', image: '/images/jacket.png', price: 'Rs. 3,500.00' },
  { name: 'Hoodies', image: '/images/hoodies.png', price: 'Rs. 2,800.00' },
  { name: 'Shorts', image: '/images/shorts.png', price: 'Rs. 1,200.00' },
  { name: 'Dress', image: '/images/dress.png', price: 'Rs. 2,900.00' },
  { name: 'Shoes', image: '/images/shoes.png', price: 'Rs. 3,200.00' },
  { name: 'Accessories', image: '/images/accessories.png', price: 'Rs. 850.00' },
  { name: 'Striped Knit Bandeau Crop Top', image: '/images/fancy_top.png', price: 'Rs. 1,200.00' },
  { name: 'Sleeveless Ribbed T-Shirt', image: '/images/crop_black.png', price: 'Rs. 1,250.00' },
  { name: 'Snappy Crop Top', image: '/images/crop_beige.png', price: 'Rs. 650.00' },
  { name: 'Ruffle Strappy Crop Top With', image: '/images/crop_ruffle.png', price: 'Rs. 1,400.00' },
  { name: 'Tailored Blazer Jacket', image: '/images/jacket.png', price: 'Rs. 3,500.00' },
  { name: 'Premium Wool Tuxedo', image: '/images/shirts.png', price: 'Rs. 7,800.00' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Lock body scroll when search or mobile drawer is open
  useEffect(() => {
    if (isSearchOpen || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen, mobileMenuOpen]);

  const navItems = [
    { 
      name: 'Shop', 
      hasDropdown: true,
      subCategories: ['Fancy Top', 'Jacket', 'Jeans', "Men's Shorts", 'Pants', 'Shirts', 'Shorts', 'Sweatshirts', 'T-Shirts']
    },
    { 
      name: 'Men', 
      hasDropdown: true,
      subCategories: ['Shirts', 'T-Shirts', 'Jackets', 'Jeans', 'Shorts', 'Suits'] 
    },
    { 
      name: 'Women', 
      hasDropdown: true,
      subCategories: ['Fancy Tops', 'Dresses', 'Jeans', 'Hoodies', 'Accessories'] 
    },
    { 
      name: 'Collections', 
      hasDropdown: true,
      subCategories: ['Summer 2026', 'Urban Outerwear', 'Best Sellers', 'New Arrivals'] 
    },
    { 
      name: 'Product', 
      hasDropdown: true,
      subCategories: ['All Products', 'Featured Items', 'Discounts'] 
    },
    { name: 'Blog', hasDropdown: false },
    { 
      name: 'Pages', 
      hasDropdown: true,
      subCategories: ['About Us', 'Contact Us', 'FAQ', 'Size Guide'] 
    },
  ];

  const toggleMobileCategory = (name) => {
    setExpandedMobileCategory(prev => prev === name ? null : name);
  };

  // Filter products based on search query
  const searchResults = searchQuery
    ? allProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="w-full px-3 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Mobile menu burger button (left on mobile) */}
        <button 
          className="lg:hidden text-gray-700 hover:text-black p-1.5 transition-colors cursor-pointer focus:outline-none shrink-0"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6 stroke-[1.75]" />
        </button>

        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-gray-900 select-none hover:opacity-80 transition-opacity">
           Clothes
          </a>
        </div>

        {/* Desktop Nav (lg and above) */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className={`${item.name === 'Shop' ? '' : 'relative'} group py-2`}
            >
              <button className="flex items-center text-sm xl:text-[15px] font-medium text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer focus:outline-none">
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 ml-1 text-gray-400 group-hover:text-black transition-transform duration-300 group-hover:rotate-180" />
                )}
              </button>

              {/* Mega Dropdown Menu for Shop */}
              {item.hasDropdown && item.name === 'Shop' && (
                <div className="absolute top-full left-0 right-0 w-full bg-white border-b border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10 grid grid-cols-4 gap-8 divide-x divide-gray-100 text-left">
                    
                    {/* Column 1: Shop By Category */}
                    <div className="pr-4">
                      <div className="mb-6">
                        <h3 className="text-xs font-bold tracking-[0.2em] text-neutral-900 uppercase pb-2 border-b border-black inline-block">
                          SHOP BY CATEGORY
                        </h3>
                      </div>
                      <ul className="space-y-3.5 text-[14px] text-neutral-500 font-medium">
                        {item.subCategories.map((sub, sIdx) => (
                          <li key={sIdx}><a href="#" className="hover:text-black transition-colors block">{sub}</a></li>
                        ))}
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
                  {item.subCategories?.map((sub, sIdx) => (
                    <a key={sIdx} href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors">{sub}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Action Icons (Adaptive spacing for Mobile / Tablet / Desktop) */}
        <div className="flex items-center space-x-2.5 sm:space-x-5 md:space-x-6">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-gray-700 hover:text-black p-1.5 transition-colors cursor-pointer focus:outline-none" 
            aria-label="Search"
          >
            <Search className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.75]" />
          </button>
          
          <button className="text-gray-700 hover:text-black p-1.5 transition-colors cursor-pointer focus:outline-none" aria-label="Account">
            <User className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.75]" />
          </button>

          {/* Wishlist */}
          <button className="relative text-gray-700 hover:text-black p-1.5 transition-colors cursor-pointer focus:outline-none" aria-label="Wishlist">
            <Heart className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.75]" />
            <span className="absolute top-0 right-0 sm:-top-1 sm:-right-1 bg-red-600 text-white text-[9px] sm:text-[10px] font-bold w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center rounded-full border border-white">
              2
            </span>
          </button>

          {/* Cart */}
          <button className="flex items-center space-x-1.5 text-gray-700 hover:text-black p-1.5 transition-colors cursor-pointer focus:outline-none" aria-label="Cart">
            <span className="text-[14px] font-medium hidden sm:inline">Cart</span>
            <div className="relative">
              <ShoppingBag className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.75]" />
              <span className="absolute top-0 right-0 sm:-top-1 sm:-right-1 bg-red-600 text-white text-[9px] sm:text-[10px] font-bold w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center rounded-full border border-white">
                3
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Slide-out Mobile Menu Drawer & Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300 lg:hidden z-[90] ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[340px] bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden z-[100] flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Header Top */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-neutral-50">
          <span className="text-xs font-bold tracking-[0.25em] text-neutral-800 uppercase">
            Menu Navigation
          </span>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-neutral-500 hover:text-black p-1 transition-colors cursor-pointer focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Accordion Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-2 no-scrollbar">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-100 pb-2">
              <button 
                onClick={() => item.hasDropdown ? toggleMobileCategory(item.name) : setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-neutral-800 hover:text-black transition-colors focus:outline-none cursor-pointer"
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${
                    expandedMobileCategory === item.name ? 'rotate-180 text-black' : ''
                  }`} />
                )}
              </button>
              
              {/* Accordion Sub-items */}
              {item.hasDropdown && expandedMobileCategory === item.name && (
                <div className="pl-3 py-2 space-y-2 bg-neutral-50 rounded-lg border-l-2 border-neutral-900 my-1">
                  {item.subCategories?.map((sub, sIdx) => (
                    <a 
                      key={sIdx} 
                      href="#" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-xs font-medium text-neutral-600 hover:text-black py-1.5 px-2 rounded-md hover:bg-neutral-100 transition-colors"
                    >
                      <span>{sub}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Quick info inside mobile drawer */}
          <div className="pt-6 space-y-4">
            <div className="p-4 bg-neutral-900 text-white rounded-xl space-y-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 block">
                Special Offer
              </span>
              <p className="text-xs font-medium text-neutral-200">
                Get 10% OFF on your first purchase. Use code: <span className="font-bold text-white">ARLUNE10</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Footer */}
        <div className="p-5 border-t border-gray-100 bg-neutral-50 text-xs text-neutral-500 space-y-2 font-medium">
          <p>Need assistance? Contact support</p>
          <p className="font-bold text-neutral-800">+1234 567 890 • help@gmail.com</p>
        </div>
      </div>

      {/* Search Overlay Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300 z-[90] ${
          isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Left-to-Right Search Drawer (Responsive max-w-full sm:max-w-[460px]) */}
      <div 
        className={`fixed top-0 left-0 h-full w-full sm:w-[460px] bg-white shadow-2xl transition-transform duration-300 ease-out z-[100] flex flex-col ${
          isSearchOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.25em] text-neutral-800 uppercase">
            Search store
          </span>
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="text-neutral-500 hover:text-black transition-colors p-1 cursor-pointer focus:outline-none"
            aria-label="Close search"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Drawer Input Area */}
        <div className="p-5 sm:p-6">
          <div className="relative border-b border-neutral-900 pb-2">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type to search products..."
              className="w-full bg-transparent text-neutral-800 placeholder-neutral-400 text-sm sm:text-base focus:outline-none pr-8 font-medium"
              autoFocus={isSearchOpen}
            />
            <Search className="w-5 h-5 text-neutral-400 absolute right-0 top-1/2 -translate-y-1/2 stroke-[1.5]" />
          </div>
        </div>

        {/* Search Results Area */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 pb-6 no-scrollbar">
          {searchQuery && searchResults.length === 0 && (
            <div className="text-center py-10 text-neutral-400 text-sm font-medium">
              No products found for "{searchQuery}"
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase block mb-2">
                Products found ({searchResults.length})
              </span>
              <div className="space-y-3">
                {searchResults.map((product, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-2.5 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group">
                    <div className="w-14 h-16 rounded-lg overflow-hidden bg-neutral-50 flex items-center justify-center p-1 shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <h4 className="text-sm font-semibold text-neutral-800 group-hover:text-black transition-colors truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs font-bold text-[#a47e65] mt-1">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!searchQuery && (
            <div className="space-y-6 text-left py-4">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase block mb-3.5">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Jacket', 'Fancy Top', 'Jeans', 'T-Shirts', 'Shorts'].map((term) => (
                    <button 
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="text-xs font-semibold bg-neutral-50 border border-neutral-200 text-neutral-600 hover:bg-black hover:text-white hover:border-black transition-all px-3 py-1.5 rounded-full cursor-pointer focus:outline-none"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase block mb-3.5">
                  Need Help?
                </span>
                <div className="text-xs text-neutral-500 font-semibold space-y-1.5 leading-relaxed">
                  <p>Contact Support: +1234 567 890</p>
                  <p>Email: help@gmail.com</p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

    </header>
  );
}

