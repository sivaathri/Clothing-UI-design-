import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-neutral-300 font-sans border-t border-neutral-900 select-none">
      
      {/* Top Grid Area */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
        
        {/* Column 1: Brand & Contact */}
        <div className="space-y-6">
          <a href="#" className="text-2xl font-bold tracking-[0.25em] text-white hover:opacity-80 transition-opacity">
            ARLUNE
          </a>
          <div className="space-y-2 text-sm text-neutral-400 font-medium">
            <p>Contact : +1234 567 890</p>
            <p>Mail : help@gmail.com</p>
          </div>
        </div>

        {/* Column 2: About Us */}
        <div className="space-y-5">
          <h3 className="text-xs font-bold tracking-[0.2em] text-[#a47e65] uppercase">
            ABOUT US
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400 font-medium max-w-sm">
            Arlune* is an independent, femirine-founded label dedicated to creating future-grade active garments. Thanks to Arlune for shooting all its new their photography and products in this demo store.
          </p>
        </div>

        {/* Column 3: Main Menu */}
        <div className="space-y-5">
          <h3 className="text-xs font-bold tracking-[0.2em] text-[#a47e65] uppercase">
            MAIN MENU
          </h3>
          <ul className="space-y-3.5 text-sm font-semibold text-neutral-300">
            <li><a href="#" className="hover:text-white transition-colors block">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Catalog</a></li>
            <li><a href="#" className="hover:text-white transition-colors block">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-5">
          <h3 className="text-xs font-bold tracking-[0.2em] text-[#a47e65] uppercase">
            SIGN UP & SAVE 10%
          </h3>
          <p className="text-sm text-neutral-400 font-medium">
            Get a 10% discount on your first order.
          </p>
          
          <div className="space-y-3.5 max-w-sm">
            <input 
              type="email" 
              placeholder="Your email"
              className="w-full bg-[#121212] border border-neutral-800 text-white text-sm px-4 py-3 rounded-none focus:outline-none focus:border-neutral-700 transition-colors"
            />
            <button className="bg-[#a47e65] hover:bg-neutral-800 text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3.5 transition-colors duration-300 cursor-pointer shadow-sm active:scale-98 focus:outline-none rounded-none block">
              SUBSCRIBE
            </button>
          </div>

          {/* Social Icons (Inline SVGs) */}
          <div className="flex items-center space-x-5 pt-3 text-neutral-400">
            {/* Facebook */}
            <a href="#" className="hover:text-white transition-colors cursor-pointer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" className="hover:text-white transition-colors cursor-pointer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-white transition-colors cursor-pointer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="hover:text-white transition-colors cursor-pointer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="hover:text-white transition-colors cursor-pointer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.86.17 1.75.28 2.63.29V8.3c-1.42-.04-2.82-.44-4.04-1.19a8.47 8.47 0 0 1-.36 4.39c-.93 2.19-2.73 3.93-4.94 4.8-2.6 1.03-5.63.85-8.08-.47C.71 14.54-.48 11.53-.16 8.52c.3-2.77 2.01-5.32 4.6-6.33a8.9 8.9 0 0 1 7.21.36c.25-1.19.53-2.38.87-3.56zM8.33 5.4c-1.34.02-2.61.64-3.41 1.7a4.9 4.9 0 0 0 .15 5.86c.92 1.05 2.37 1.54 3.73 1.28 1.4-.26 2.6-1.32 3.03-2.67.45-1.44.11-3.08-.88-4.17-.7-.76-1.68-1.2-2.62-1.2z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Utility Divider Line */}
      <div className="border-t border-neutral-900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          
          {/* Bottom Left: Country/Language Selection & Copyright */}
          <div className="space-y-6 text-left">
            <div className="flex flex-wrap gap-4">
              
              {/* Country Selection Button */}
              <div className="flex items-center space-x-2 bg-[#0c0c0c] border border-neutral-800 rounded-sm px-3.5 py-2 text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer transition-colors focus:outline-none">
                {/* Indian flag CSS representation */}
                <div className="w-4.5 h-3 flex flex-col shrink-0 overflow-hidden rounded-[1px]">
                  <div className="bg-[#FF9933] h-1"></div>
                  <div className="bg-[#FFFFFF] h-1 flex items-center justify-center relative">
                    <div className="bg-[#000080] w-[3px] h-[3px] rounded-full absolute"></div>
                  </div>
                  <div className="bg-[#128807] h-1"></div>
                </div>
                <span>India (INR ₹)</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-neutral-500">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              {/* Language Selection Button */}
              <div className="flex items-center space-x-2 bg-[#0c0c0c] border border-neutral-800 rounded-sm px-3.5 py-2 text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer transition-colors focus:outline-none">
                <span>English</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-neutral-500">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

            </div>
            {/* Copyright */}
            <p className="text-xs text-neutral-500 font-semibold tracking-wide">
              &copy; 2024, <span className="text-neutral-400">Arlune*Cloths</span> . All rights reserved.
            </p>
          </div>

          {/* Bottom Right: Links & Payments */}
          <div className="flex flex-col items-start lg:items-end space-y-6">
            
            {/* Nav links */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-widest text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">Search</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>

            {/* Payment Badge Icons (CSS Vectorized) */}
            <div className="flex items-center space-x-2.5">
              
              {/* VISA */}
              <div className="w-[38px] h-[22px] bg-white rounded-[2px] flex items-center justify-center shadow-sm select-none shrink-0">
                <span className="text-[9px] font-black italic tracking-tighter text-[#1a1f71]">VISA</span>
              </div>

              {/* MasterCard */}
              <div className="w-[38px] h-[22px] bg-white rounded-[2px] flex items-center justify-center shadow-sm relative overflow-hidden select-none shrink-0">
                <div className="flex items-center justify-center -space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#eb001b] opacity-90"></div>
                  <div className="w-3 h-3 rounded-full bg-[#f79e1b] opacity-90"></div>
                </div>
              </div>

              {/* AMEX */}
              <div className="w-[38px] h-[22px] bg-white rounded-[2px] flex items-center justify-center shadow-sm select-none shrink-0">
                <span className="text-[7px] font-black tracking-tight text-[#007bc1]">AMEX</span>
              </div>

              {/* PayPal */}
              <div className="w-[38px] h-[22px] bg-white rounded-[2px] flex items-center justify-center shadow-sm select-none shrink-0">
                <span className="text-[8px] font-black italic tracking-tighter text-[#003087]">Pay<span className="text-[#0079C1]">Pal</span></span>
              </div>

              {/* Apple Pay */}
              <div className="w-[38px] h-[22px] bg-white rounded-[2px] flex items-center justify-center shadow-sm select-none shrink-0">
                <div className="flex items-center space-x-0.5">
                  {/* Small Apple Icon representation */}
                  <div className="w-2 h-2.5 bg-black rounded-b-[2px] rounded-t-[1px] relative">
                    <div className="w-1.5 h-1 bg-white absolute top-[-1px] left-[1px] rounded-full rotate-45"></div>
                  </div>
                  <span className="text-[8px] font-bold text-black tracking-tighter">Pay</span>
                </div>
              </div>

              {/* G Pay */}
              <div className="w-[38px] h-[22px] bg-white rounded-[2px] flex items-center justify-center shadow-sm select-none shrink-0">
                <span className="text-[8px] font-bold text-neutral-800 tracking-tighter">
                  <span className="text-[#4285F4]">G</span> <span className="text-[#EA4335]">P</span><span className="text-[#FBBC05]">a</span><span className="text-[#34A853]">y</span>
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}
