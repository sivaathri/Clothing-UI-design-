import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header component */}
      <Header />

      {/* Categories navigation slider */}
      <Categories />

      {/* Hero Showcase slider */}
      <Hero />
    </div>
  );
}

export default App;
