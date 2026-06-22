import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import CartModal from './components/CartModal'

import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const DEFAULT_PRODUCT = {
  id: 'fermented-beetroot-powder',
  name: 'Fermented Beetroot Powder',
  price: 499,
  image: '/product1.png',
  description: 'Supports gut health, immunity and detox with the goodness of real beetroots.'
};

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    const itemToAdd = product && product.id ? product : DEFAULT_PRODUCT;
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === itemToAdd.id);
      if (existing) {
        return prevItems.map(item => 
          item.id === itemToAdd.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              cartCount={cartCount} 
              onAddToCart={handleAddToCart} 
              onCartClick={() => setIsCartOpen(true)}
            />
          } 
        />
        <Route 
          path="/about" 
          element={
            <About 
              cartCount={cartCount} 
              onAddToCart={handleAddToCart} 
              onCartClick={() => setIsCartOpen(true)}
            />
          } 
        />
        <Route 
          path="/products" 
          element={
            <Products 
              cartCount={cartCount} 
              onAddToCart={handleAddToCart} 
              onCartClick={() => setIsCartOpen(true)}
            />
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Contact 
              cartCount={cartCount} 
              onAddToCart={handleAddToCart} 
              onCartClick={() => setIsCartOpen(true)}
            />
          } 
        />
      </Routes>

      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </Router>
  )
}

export default App

