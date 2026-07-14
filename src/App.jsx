import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import BestSellers from './components/BestSellers';

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
    </div>
  );
}

export default App;
