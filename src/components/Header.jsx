import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { LeafLogoIcon, CartIcon } from './Icons'

export default function Header({ activePage = 'home', cartCount, onShopNowClick, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fdfcf7] border-b border-[#e4dfd5]/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-1 group"
        >
          <LeafLogoIcon />
          <div className="flex flex-col text-left pl-1">
            <span className="font-sans text-xl font-bold text-[#0A2B15] leading-none tracking-tight group-hover:text-burgundy transition-colors duration-300">
              Banbasi Agro
            </span>
            <span className="text-xs text-charcoal-muted font-sans font-medium tracking-wide mt-1">
              Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`relative text-[15px] font-sans py-2 group transition-colors duration-300 ${
              activePage === 'home' 
                ? 'font-semibold text-charcoal' 
                : 'font-medium text-charcoal-muted hover:text-burgundy'
            }`}
          >
            Home
            <span className={`absolute -bottom-[2px] left-1/2 -translate-x-1/2 h-[3px] bg-burgundy rounded-full transition-all duration-300 ${
              activePage === 'home' ? 'w-6' : 'w-0 group-hover:w-6'
            }`}></span>
          </Link>
          {['About Us', 'Products', 'Contact'].map((item) => {
            const isAboutActive = item === 'About Us' && activePage === 'about';
            const isProductsActive = item === 'Products' && activePage === 'products';
            const isContactActive = item === 'Contact' && activePage === 'contact';
            const isActive = isAboutActive || isProductsActive || isContactActive;
            const toPath = item === 'About Us' ? '/about' : item === 'Products' ? '/products' : '/contact';
            return (
              <Link
                key={item}
                to={toPath}
                className={`relative text-[15px] font-sans py-2 group transition-colors duration-300 ${
                  isActive 
                    ? 'font-semibold text-charcoal' 
                    : 'font-medium text-charcoal-muted hover:text-burgundy'
                }`}
              >
                {item}
                <span className={`absolute -bottom-[2px] left-1/2 -translate-x-1/2 h-[3px] bg-burgundy rounded-full transition-all duration-300 ${
                  isActive ? 'w-6' : 'w-0 group-hover:w-6'
                }`}></span>
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Cart Badge */}
          <button 
            onClick={onCartClick}
            className="relative p-2 text-charcoal hover:text-burgundy transition-colors duration-300 group cursor-pointer"
          >
            <CartIcon />
            <span className="absolute -top-1 -right-1 bg-burgundy text-white font-sans font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#fdfcf7] shadow-sm transform group-hover:scale-110 transition-transform">
              {cartCount}
            </span>
          </button>

          {/* Shop Now Button */}
          <Link 
            to="/products" 
            className="hidden sm:inline-block bg-burgundy hover:bg-burgundy-hover text-white px-6 py-2.5 rounded-full text-[15px] font-semibold tracking-wide shadow-md shadow-burgundy/10 hover:shadow-lg hover:shadow-burgundy/20 transform hover:-translate-y-[1px] active:translate-y-0 transition-all duration-300 font-sans cursor-pointer"
          >
            Shop Now &rarr;
          </Link>

          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-charcoal hover:text-burgundy transition-colors duration-300 cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden font-sans">
          {/* Backdrop with fade-in and blur */}
          <div 
            className="absolute inset-0 bg-[#1c1c1c]/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex">
            {/* Drawer Panel */}
            <div className="w-80 bg-[#fdfcf7] border-l border-[#e4dfd5]/40 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out translate-x-0 relative">
              
              <div>
                {/* Mobile Menu Header */}
                <div className="h-20 px-6 flex items-center justify-between border-b border-[#e4dfd5]/40 bg-white">
                  <Link 
                    to="/" 
                    className="flex items-center gap-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LeafLogoIcon />
                    <div className="flex flex-col text-left pl-1">
                      <span className="font-sans text-lg font-bold text-[#0A2B15] leading-none tracking-tight">
                        Banbasi Agro
                      </span>
                      <span className="text-[10px] text-charcoal-muted font-sans font-medium tracking-wide mt-0.5">
                        Pvt. Ltd.
                      </span>
                    </div>
                  </Link>
                  <button 
                    onClick={() => setIsMenuOpen(false)} 
                    className="p-1.5 rounded-full hover:bg-charcoal/5 text-charcoal-muted hover:text-charcoal transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="p-6 flex flex-col gap-1 text-left">
                  <span className="text-[10px] font-bold text-charcoal-muted uppercase tracking-wider mb-3 block">Navigation</span>
                  {[
                    { name: 'Home', path: '/', active: activePage === 'home' },
                    { name: 'About Us', path: '/about', active: activePage === 'about' },
                    { name: 'Products', path: '/products', active: activePage === 'products' },
                    { name: 'Contact', path: '/contact', active: activePage === 'contact' }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-bold font-sans tracking-wide transition-all duration-300 ${
                        item.active 
                          ? 'bg-burgundy-light text-burgundy' 
                          : 'text-charcoal hover:bg-[#FAF6F0] hover:text-burgundy'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className={`w-1.5 h-1.5 rounded-full bg-burgundy transition-transform duration-300 ${item.active ? 'scale-100' : 'scale-0'}`} />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Bottom section with CTA and branding */}
              <div className="p-6 border-t border-[#e4dfd5]/40 bg-white space-y-4">
                <Link 
                  to="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex items-center justify-center bg-burgundy hover:bg-burgundy-hover text-white py-3.5 rounded-full text-base font-bold shadow-md shadow-burgundy/10 hover:shadow-lg transition-all duration-300"
                >
                  Shop Now &rarr;
                </Link>
                
                <div className="flex flex-col items-center gap-0.5 pt-2">
                  <span className="text-[10px] font-bold text-charcoal-muted uppercase tracking-wider">Banbasi Agro Pvt. Ltd.</span>
                  <span className="text-[9px] text-charcoal-muted/80 font-medium">Quality Fermented Probiotics</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  )
}
