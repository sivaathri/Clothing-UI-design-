import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import BestSellers from './components/BestSellers';
import ProductDetailScreen from './components/ProductDetailScreen';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { arrivals } from './data/arrivalsData';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync with URL hash for browser back/forward navigation support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#product-')) {
        const id = parseInt(hash.replace('#product-', ''), 10);
        const found = arrivals.find((p) => p.id === id);
        if (found) {
          setSelectedProduct(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setSelectedProduct(null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    window.location.hash = `#product-${product.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedProduct(null);
    if (window.location.hash) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Global Header */}
      <Header onHomeClick={handleBackToHome} />

      {/* Main Content Area: Switch between Product Details Screen and Home Page */}
      {selectedProduct ? (
        <main className="flex-1">
          <ProductDetailScreen 
            product={selectedProduct} 
            onBack={handleBackToHome}
            onSelectProduct={handleSelectProduct}
          />
        </main>
      ) : (
        <main className="flex-1">
          {/* Categories navigation */}
          <Categories />

          {/* Hero Showcase slider */}
          <Hero />

          {/* New Arrivals Section */}
          <NewArrivals onSelectProduct={handleSelectProduct} />

          {/* Best Sellers Section */}
          <BestSellers />
        </main>
      )}

      {/* Global Footer */}
      <Footer />

      {/* Back to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
