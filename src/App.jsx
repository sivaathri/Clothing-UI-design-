import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import BestSellers from './components/BestSellers';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header component */}
      <Header />

      {/* Categories navigation slider */}
      <Categories />

      {/* Hero Showcase slider */}
      <Hero />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Best Sellers Section */}
      <BestSellers />

      {/* Global Footer */}
      <Footer />

      {/* Back to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
