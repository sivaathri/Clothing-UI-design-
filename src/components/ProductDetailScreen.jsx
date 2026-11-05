import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Heart, 
  ShoppingBag, 
  Check, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Ruler, 
  Share2, 
  Minus, 
  Plus, 
  Sparkles,
  MapPin,
  ThumbsUp,
  X
} from 'lucide-react';
import { arrivals } from '../data/arrivalsData';

export default function ProductDetailScreen({ product, onBack, onSelectProduct }) {
  // Always declare hooks at the top level
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [pincode, setPincode] = useState('');
  const [pincodeChecked, setPincodeChecked] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  // Sync state whenever product changes
  useEffect(() => {
    if (product) {
      setSelectedImageIndex(0);
      setSelectedColor(product.colors?.[0] || null);
      setSelectedSize(product.sizes?.[0] || 'M');
      setQuantity(1);
      setIsWishlisted(false);
      setPincodeChecked(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product]);

  if (!product) return null;

  const gallery = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [product.image];

  // Current product index in arrivals list
  const currentIndex = arrivals.findIndex((p) => p.id === product.id);
  const prevProduct = currentIndex > 0 ? arrivals[currentIndex - 1] : arrivals[arrivals.length - 1];
  const nextProduct = currentIndex < arrivals.length - 1 ? arrivals[currentIndex + 1] : arrivals[0];

  // Related products (excluding current)
  const relatedProducts = arrivals
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  // Gallery handlers
  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  // Add to Bag handler
  const handleAddToBag = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      setToastMessage(`Added ${quantity}x "${product.title || product.name}" (${selectedSize}) to bag`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
    }, 500);
  };

  // Wishlist toggle
  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
    setToastMessage(!isWishlisted ? 'Saved to your Wishlist' : 'Removed from your Wishlist');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  // Share handler
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setToastMessage('Product link copied to clipboard!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  // Check pincode
  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (pincode.trim().length >= 5) {
      setPincodeChecked(true);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen text-neutral-900 select-none pb-24">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[70] bg-neutral-900 text-white px-6 py-3.5 rounded-full shadow-2xl flex items-center space-x-3 text-xs sm:text-sm font-semibold border border-neutral-700 transition-all duration-300">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP SUB-NAV BAR: Back button & Breadcrumbs (Edge-to-edge full width) */}
      <div className="w-full bg-white border-b border-neutral-100 sticky top-0 z-30">
        <div className="w-full px-4 sm:px-8 lg:px-14 py-4 flex items-center justify-between">
          
          {/* Back button */}
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-wider text-neutral-700 hover:text-black transition-colors cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center transition-colors">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </div>
            <span>BACK TO HOME</span>
          </button>

          {/* Breadcrumb path */}
          <div className="hidden md:flex items-center space-x-2 text-xs text-neutral-400 font-medium tracking-wide">
            <span onClick={onBack} className="hover:text-black cursor-pointer">HOME</span>
            <span>/</span>
            <span onClick={onBack} className="hover:text-black cursor-pointer">NEW ARRIVALS</span>
            <span>/</span>
            <span className="text-neutral-900 font-bold uppercase">{product.name}</span>
          </div>

          {/* Next / Prev Product quick links */}
          <div className="flex items-center space-x-3 text-xs font-semibold text-neutral-500">
            <button
              onClick={() => onSelectProduct(prevProduct)}
              className="hover:text-black flex items-center space-x-1 cursor-pointer transition-colors"
              title={`View ${prevProduct.name}`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">PREV</span>
            </button>
            <span className="text-neutral-300">|</span>
            <button
              onClick={() => onSelectProduct(nextProduct)}
              className="hover:text-black flex items-center space-x-1 cursor-pointer transition-colors"
              title={`View ${nextProduct.name}`}
            >
              <span className="hidden sm:inline">NEXT</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* FULL SCREEN MAIN PRODUCT SECTION (Edge-to-Edge) */}
      <div className="w-full px-4 sm:px-8 lg:px-14 xl:px-16 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: MULTI-IMAGE GALLERY (7 cols) ================= */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 sm:gap-6">
            
            {/* Thumbnail Column */}
            {gallery.length > 1 && (
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-20 lg:w-24 shrink-0">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`aspect-square w-16 sm:w-20 lg:w-24 rounded-xl overflow-hidden p-1.5 bg-[#f5f5f5] border-2 transition-all cursor-pointer flex-shrink-0 ${
                      idx === selectedImageIndex 
                        ? 'border-black shadow-md scale-102' 
                        : 'border-transparent opacity-60 hover:opacity-100 hover:border-neutral-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain object-bottom"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Big Main Stage Image */}
            <div className="flex-1 relative aspect-[3/3.8] sm:aspect-[4/4.5] min-h-[460px] sm:min-h-[580px] lg:min-h-[660px] xl:min-h-[720px] bg-[#f5f5f5] rounded-2xl overflow-hidden flex items-end justify-center p-6 sm:p-10 group">
              
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-5 left-5 z-10 inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-black tracking-widest bg-black text-white uppercase shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{product.badge}</span>
                </div>
              )}

              {/* Action Buttons Overlay: Share & Wishlist */}
              <div className="absolute top-5 right-5 z-10 flex items-center space-x-2.5">
                <button
                  onClick={handleShare}
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-800 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  title="Share product link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleWishlist}
                  className={`w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                    isWishlisted ? 'text-red-500' : 'text-neutral-800 hover:text-red-500'
                  }`}
                  title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500' : ''}`} />
                </button>
              </div>

              {/* Main Image */}
              <img
                src={gallery[selectedImageIndex]}
                alt={product.title || product.name}
                className="w-full h-[95%] object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Left/Right image arrows */}
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-neutral-900 shadow-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-neutral-900 shadow-md flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Bottom image counter tag */}
              {gallery.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  {selectedImageIndex + 1} / {gallery.length}
                </div>
              )}

            </div>

          </div>

          {/* ================= RIGHT COLUMN: PRODUCT PURCHASING & DETAILS (5 cols) ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:sticky lg:top-24">
            
            <div className="space-y-5">
              
              {/* Studio brand & SKU */}
              <div className="flex items-center justify-between text-xs font-bold tracking-widest text-neutral-400 uppercase">
                <span>ARLUNE STUDIO / {product.category}</span>
                <span className="font-mono text-[11px] text-neutral-400 bg-neutral-100 px-2.5 py-0.5 rounded">{product.sku}</span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                  {product.title || product.name}
                </h1>
                
                {/* Rating & Review counter */}
                <div className="flex items-center space-x-2.5 mt-2.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">{product.rating}</span>
                  <span className="text-neutral-300">•</span>
                  <a href="#reviews" className="text-xs sm:text-sm text-neutral-500 hover:text-black font-medium underline underline-offset-2">
                    {product.reviewsCount} customer reviews
                  </a>
                  <span className="text-neutral-300">•</span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>In Stock</span>
                  </span>
                </div>
              </div>

              {/* Price display */}
              <div className="flex items-baseline space-x-3.5 py-3.5 border-y border-neutral-100">
                <span className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-neutral-400 line-through font-medium">
                    {product.oldPrice}
                  </span>
                )}
                {product.oldPrice && (
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    SAVE 25% OFF
                  </span>
                )}
              </div>

              {/* Color options */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
                      COLOR: <span className="font-semibold text-neutral-600 normal-case">{selectedColor?.name}</span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(color)}
                        style={{ backgroundColor: color.hex }}
                        className={`w-8 h-8 rounded-full transition-all cursor-pointer flex items-center justify-center relative shadow-xs ${
                          selectedColor?.name === color.name 
                            ? 'ring-2 ring-black ring-offset-2 scale-110' 
                            : 'hover:scale-105 border border-neutral-300'
                        }`}
                        title={color.name}
                      >
                        {selectedColor?.name === color.name && (
                          <Check className={`w-4 h-4 stroke-[3] ${
                            color.hex === '#fafafa' || color.hex === '#f8f8f8' || color.hex === '#ffffff' 
                              ? 'text-neutral-900' 
                              : 'text-white'
                          }`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">
                      SELECT SIZE
                    </span>
                    <button
                      onClick={() => setShowSizeGuide(true)}
                      className="inline-flex items-center space-x-1 text-xs text-neutral-500 hover:text-black font-semibold underline underline-offset-2 cursor-pointer"
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      <span>Size Guide</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-12 h-11 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          selectedSize === size
                            ? 'bg-neutral-900 text-white shadow-sm'
                            : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-transparent'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400 block">
                    {product.details?.Model || "Model is 6'0\" wearing size M"}
                  </span>
                </div>
              )}

              {/* Quantity Stepper & Add to Bag Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-neutral-200 rounded-xl px-2.5 py-2 bg-neutral-50 shrink-0">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity <= 1}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-600 hover:text-black hover:bg-white transition-all disabled:opacity-30 cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-neutral-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                      disabled={quantity >= 10}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-600 hover:text-black hover:bg-white transition-all disabled:opacity-30 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Bag CTA */}
                  <button
                    onClick={handleAddToBag}
                    disabled={isAdding}
                    className="flex-1 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase py-4 px-6 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center space-x-2.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{isAdding ? 'ADDING TO BAG...' : 'ADD TO BAG'}</span>
                  </button>
                </div>

                {/* Instant Checkout Button */}
                <button
                  onClick={() => {
                    handleAddToBag();
                    setTimeout(() => {
                      alert(`Proceeding to checkout with ${quantity}x ${product.title || product.name} (${selectedSize})`);
                    }, 600);
                  }}
                  className="w-full bg-[#a75d3f] hover:bg-[#8e4c32] text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase py-4 px-6 rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center cursor-pointer"
                >
                  BUY IT NOW
                </button>
              </div>

              {/* Pincode delivery estimator */}
              <div className="pt-2 border-t border-neutral-100">
                <form onSubmit={handleCheckPincode} className="space-y-2">
                  <label className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider block">
                    Estimated Delivery
                  </label>
                  <div className="flex items-center space-x-2">
                    <div className="relative flex-1">
                      <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="Enter 6-digit Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        maxLength={6}
                        className="w-full pl-9 pr-3 py-2.5 text-xs border border-neutral-200 rounded-lg focus:outline-none focus:border-black"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-neutral-900 text-white text-xs font-bold rounded-lg hover:bg-neutral-800 cursor-pointer"
                    >
                      CHECK
                    </button>
                  </div>
                  {pincodeChecked && (
                    <div className="text-xs text-emerald-700 bg-emerald-50 p-2.5 rounded-lg flex items-center space-x-2 mt-2">
                      <Truck className="w-4 h-4 shrink-0 text-emerald-600" />
                      <span>Delivery in <strong>2-3 days</strong> to <strong>{pincode}</strong> • Free Express Shipping</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Assurance Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-2 text-[11px] text-neutral-600">
                <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <Truck className="w-5 h-5 text-neutral-900 mb-1.5" />
                  <span className="font-bold text-neutral-900">Free Express</span>
                  <span className="text-[10px] text-neutral-400">On orders ₹999+</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <RotateCcw className="w-5 h-5 text-neutral-900 mb-1.5" />
                  <span className="font-bold text-neutral-900">7-Day Returns</span>
                  <span className="text-[10px] text-neutral-400">Doorstep pickup</span>
                </div>
                <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <ShieldCheck className="w-5 h-5 text-neutral-900 mb-1.5" />
                  <span className="font-bold text-neutral-900">100% Original</span>
                  <span className="text-[10px] text-neutral-400">Certified luxury</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ================= EDITORIAL TABS: DESCRIPTION, COMPOSITION & CARE ================= */}
        <div className="mt-16 pt-12 border-t border-neutral-100">
          
          <div className="flex border-b border-neutral-200 space-x-8 text-xs sm:text-sm font-bold tracking-widest uppercase">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 transition-colors cursor-pointer relative ${
                activeTab === 'description' ? 'text-black' : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Description & Highlights
              {activeTab === 'description' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-4 transition-colors cursor-pointer relative ${
                activeTab === 'details' ? 'text-black' : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Fabric & Specifications
              {activeTab === 'details' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-4 transition-colors cursor-pointer relative ${
                activeTab === 'shipping' ? 'text-black' : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Shipping & Returns
              {activeTab === 'shipping' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
              )}
            </button>
          </div>

          <div className="pt-8 text-sm leading-relaxed text-neutral-600">
            {activeTab === 'description' && (
              <div className="space-y-4 max-w-3xl">
                <p className="text-base text-neutral-800 font-medium leading-relaxed">
                  {product.description}
                </p>
                {product.features && (
                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-neutral-900 tracking-wider uppercase mb-3">Key Highlights</h4>
                    <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                      {product.features.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'details' && (
              <div className="max-w-2xl divide-y divide-neutral-100">
                {product.details && Object.entries(product.details).map(([key, val]) => (
                  <div key={key} className="py-3.5 flex justify-between text-sm">
                    <span className="font-semibold text-neutral-500">{key}</span>
                    <span className="font-medium text-neutral-900">{val}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-3 max-w-2xl text-neutral-700">
                <p>• <strong>Free standard delivery</strong> across all Indian metro locations on prepaid orders above ₹999.</p>
                <p>• Orders placed before 2:00 PM are prioritized for same-day dispatch from our central warehouse.</p>
                <p>• Every shipment is dispatched in 100% recyclable, biodegradable luxury protective packaging.</p>
                <p>• Enjoy 7-day hassle-free doorstep returns and instant exchange support.</p>
              </div>
            )}
          </div>

        </div>

        {/* ================= CUSTOMER REVIEWS SECTION ================= */}
        <div id="reviews" className="mt-16 pt-12 border-t border-neutral-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-100 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 uppercase tracking-wide">
                Customer Reviews
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-neutral-900">{product.rating} out of 5</span>
                <span className="text-neutral-400 text-xs">Based on {product.reviewsCount} verified reviews</span>
              </div>
            </div>

            <button 
              onClick={() => alert("Review submission form opened. Verified buyers can submit feedback.")}
              className="px-5 py-2.5 rounded-full border border-neutral-900 text-xs font-bold hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
            >
              WRITE A REVIEW
            </button>
          </div>

          {/* Sample Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-5 rounded-2xl bg-neutral-50 space-y-2.5 border border-neutral-100">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-neutral-400">3 days ago</span>
              </div>
              <h5 className="font-bold text-xs text-neutral-900">Exceptional silhouette & fabric</h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                "The drape and weight are unmatched. Truly feels like something from a Milan runway. Sizing is spot on."
              </p>
              <div className="flex items-center justify-between text-[11px] pt-1 text-neutral-500">
                <span className="font-semibold text-neutral-800">Aarav M. <span className="text-emerald-600 text-[10px]">✓ Verified</span></span>
                <button className="flex items-center space-x-1 hover:text-black cursor-pointer"><ThumbsUp className="w-3 h-3" /><span>18</span></button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50 space-y-2.5 border border-neutral-100">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-neutral-400">1 week ago</span>
              </div>
              <h5 className="font-bold text-xs text-neutral-900">Worth every rupee</h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                "Quality of construction is incredible. The seams are clean, and after multiple washes the shape holds perfectly."
              </p>
              <div className="flex items-center justify-between text-[11px] pt-1 text-neutral-500">
                <span className="font-semibold text-neutral-800">Pooja K. <span className="text-emerald-600 text-[10px]">✓ Verified</span></span>
                <button className="flex items-center space-x-1 hover:text-black cursor-pointer"><ThumbsUp className="w-3 h-3" /><span>24</span></button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-50 space-y-2.5 border border-neutral-100">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-neutral-400">2 weeks ago</span>
              </div>
              <h5 className="font-bold text-xs text-neutral-900">Modern minimalist perfection</h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                "Shipped to Mumbai within 48 hours. Beautiful branded dust packaging. Will definitely order other colors."
              </p>
              <div className="flex items-center justify-between text-[11px] pt-1 text-neutral-500">
                <span className="font-semibold text-neutral-800">Vikram S. <span className="text-emerald-600 text-[10px]">✓ Verified</span></span>
                <button className="flex items-center space-x-1 hover:text-black cursor-pointer"><ThumbsUp className="w-3 h-3" /><span>9</span></button>
              </div>
            </div>
          </div>

        </div>

        {/* ================= YOU MAY ALSO LIKE / COMPLETE THE LOOK ================= */}
        <div className="mt-16 pt-12 border-t border-neutral-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-400 uppercase block">
                CURATED RECOMMENDATIONS
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 uppercase">
                Complete The Look
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProduct(item)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="w-full aspect-[3/3.8] rounded-2xl bg-[#f5f5f5] hover:bg-[#ebebeb] p-4 flex items-end justify-center transition-colors relative overflow-hidden group-hover:shadow-md">
                  {item.badge && (
                    <span className="absolute top-3 left-3 text-[9px] font-extrabold tracking-widest bg-white/90 px-2 py-0.5 rounded-full uppercase">
                      {item.badge}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[95%] object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="block text-xs sm:text-sm font-bold text-neutral-900 truncate">
                    {item.name}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 mt-0.5 block">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ================= SIZE GUIDE POPUP ================= */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setShowSizeGuide(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-neutral-900 mb-1">Size Reference Guide</h3>
            <p className="text-xs text-neutral-500 mb-5">Body measurements in inches. True to standard international luxury sizing.</p>
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-400 font-semibold uppercase">
                  <th className="py-2.5">Size</th>
                  <th className="py-2.5">Chest</th>
                  <th className="py-2.5">Waist</th>
                  <th className="py-2.5">Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-700 font-medium">
                <tr><td className="py-2.5 font-bold text-neutral-900">XS</td><td>34–36"</td><td>28–30"</td><td>27"</td></tr>
                <tr><td className="py-2.5 font-bold text-neutral-900">S</td><td>36–38"</td><td>30–32"</td><td>28"</td></tr>
                <tr><td className="py-2.5 font-bold text-neutral-900">M</td><td>38–40"</td><td>32–34"</td><td>29"</td></tr>
                <tr><td className="py-2.5 font-bold text-neutral-900">L</td><td>40–42"</td><td>34–36"</td><td>30"</td></tr>
                <tr><td className="py-2.5 font-bold text-neutral-900">XL</td><td>42–44"</td><td>36–38"</td><td>31"</td></tr>
              </tbody>
            </table>
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowSizeGuide(false)}
                className="px-5 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-bold cursor-pointer hover:bg-neutral-800"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
