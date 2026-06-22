import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemReality from './components/ProblemReality'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import ProductCTA from './components/ProductCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#fdfcf7] text-[#2c2523] selection:bg-burgundy/10 selection:text-burgundy">
      <Header cartCount={cartCount} onShopNowClick={handleAddToCart} />
      
      <main>
        <Hero onShopNowClick={handleAddToCart} />
        
        <ProblemReality />
        
        <Solution />
        
        <HowItWorks />
        
        <Benefits />
        
        <ProductCTA onAddToCart={handleAddToCart} />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
