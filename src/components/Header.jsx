import React from 'react'
import { LeafLogoIcon, CartIcon } from './Icons'

export default function Header({ cartCount, onShopNowClick }) {
  return (
    <header className="sticky top-0 z-50 bg-[#fdfcf7]/95 backdrop-blur-md border-b border-[#e4dfd5]/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <LeafLogoIcon />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-charcoal leading-none tracking-tight group-hover:text-burgundy transition-colors duration-300">
              Banbasi Agro
            </span>
            <span className="text-xs text-[#5c7c58] font-sans font-medium tracking-wide">
              Pvt. Ltd.
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="relative text-sm font-semibold text-burgundy transition-colors py-2 font-sans group">
            Home
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-burgundy rounded-full"></span>
          </a>
          {['About Us', 'Product', 'Benefits', 'Science', 'Impact', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative text-sm font-medium text-charcoal-muted hover:text-burgundy transition-colors py-2 font-sans group"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-burgundy rounded-full transition-all duration-300 group-hover:w-4"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {/* Cart Badge */}
          <button className="relative p-2 text-charcoal hover:text-burgundy transition-colors duration-300 group">
            <CartIcon />
            <span className="absolute -top-1 -right-1 bg-burgundy text-white font-sans font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#fdfcf7] shadow-sm transform group-hover:scale-110 transition-transform">
              {cartCount}
            </span>
          </button>

          {/* Shop Now Button */}
          <button onClick={onShopNowClick} className="bg-burgundy hover:bg-burgundy-hover text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-md shadow-burgundy/10 hover:shadow-lg hover:shadow-burgundy/20 transform hover:-translate-y-[1px] active:translate-y-0 transition-all duration-300 font-sans">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  )
}
