import React from 'react'
import { 
  Filter, 
  ChevronDown, 
  Grid, 
  List, 
  Leaf, 
  Beaker, 
  Heart, 
  Sparkles, 
  Truck, 
  Activity, 
  ThumbsUp,
  Accessibility
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartIcon } from '../components/Icons'

export default function Products({ cartCount, onAddToCart, onCartClick }) {
  return (
    <div className="min-h-screen bg-[#fdfcf7] text-[#1c1c1c] selection:bg-burgundy/10 selection:text-burgundy font-sans">
      
      {/* Header */}
      <Header activePage="products" cartCount={cartCount} onShopNowClick={onAddToCart} onCartClick={onCartClick} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* --- Section 1: Hero Banner --- */}
        <div className="bg-[#fdf2f4]/60 border border-[#e4dfd5]/30 rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 product-hero-bg">
          {/* Background subtle glowing effect */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-burgundy-light/40 rounded-full blur-[100px] -z-10 pointer-events-none" />

          {/* Left Text */}
          <div className="max-w-xl text-left space-y-4 z-10">
            <span className="text-burgundy text-xs font-bold tracking-wider uppercase font-sans">
              OUR PRODUCTS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-sans font-bold leading-[1.1] tracking-tight text-charcoal">
              Fermented Nutrition <br />
              <span className="text-burgundy">Made Simple</span>
            </h1>
            <p className="text-sm sm:text-base text-charcoal-muted font-sans leading-relaxed max-w-lg font-normal">
              Our range of beetroot-based probiotic powders, crafted to support gut health, boost immunity and fill hidden nutritional gaps.
            </p>
          </div>

          {/* Right Column Spacer (preserves space for background image visual on desktop) */}
          <div className="w-full md:w-1/2 hidden md:block" />
        </div>

        {/* --- Section 2: Filters Bar --- */}
        <div className="bg-white border border-[#e4dfd5]/40 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          {/* Left: Filters Dropdowns */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button className="flex items-center gap-2 border border-[#e4dfd5]/60 hover:border-burgundy hover:text-burgundy px-4 py-2.5 rounded-xl text-sm font-bold text-charcoal bg-transparent transition-all duration-300">
              <Filter className="w-4 h-4 text-charcoal-muted" />
              Filter
            </button>
            <div className="relative">
              <button className="flex items-center gap-2 border border-[#e4dfd5]/60 hover:border-burgundy hover:text-burgundy px-4 py-2.5 rounded-xl text-sm font-semibold text-charcoal bg-transparent transition-all duration-300">
                All Products
                <ChevronDown className="w-4 h-4 text-charcoal-muted" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center gap-2 border border-[#e4dfd5]/60 hover:border-burgundy hover:text-burgundy px-4 py-2.5 rounded-xl text-sm font-semibold text-charcoal bg-transparent transition-all duration-300">
                All Benefits
                <ChevronDown className="w-4 h-4 text-charcoal-muted" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center gap-2 border border-[#e4dfd5]/60 hover:border-burgundy hover:text-burgundy px-4 py-2.5 rounded-xl text-sm font-semibold text-charcoal bg-transparent transition-all duration-300">
                All Ingredients
                <ChevronDown className="w-4 h-4 text-charcoal-muted" />
              </button>
            </div>
          </div>

          {/* Right: Sort and View Layout */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2">
              <span className="text-xs text-charcoal-muted font-bold font-sans uppercase tracking-wider">Sort by:</span>
              <button className="flex items-center gap-2 border border-[#e4dfd5]/60 hover:border-burgundy hover:text-burgundy px-4 py-2.5 rounded-xl text-sm font-semibold text-charcoal bg-transparent transition-all duration-300">
                Popularity
                <ChevronDown className="w-4 h-4 text-charcoal-muted" />
              </button>
            </div>
            <div className="flex items-center gap-1 bg-[#FAF6F0] p-1 rounded-xl">
              <button className="p-2 rounded-lg bg-burgundy-light text-burgundy shadow-sm">
                <Grid className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg text-charcoal-muted hover:text-charcoal transition-colors">
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* --- Section 3: Product Cards Grid (Only 1 product as requested) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4 justify-items-start">
          
          {/* Product Card 1 */}
          <div className="w-full bg-white border border-[#e4dfd5]/40 rounded-[32px] p-6 hover:shadow-lg hover:border-burgundy/10 transition-all duration-300 group flex flex-col justify-between relative text-left">
            {/* Bestseller Badge */}
            <div className="absolute top-4 left-4 bg-burgundy-light text-burgundy text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Bestseller
            </div>
            
            {/* Product Image */}
            <div className="w-full aspect-[1.1] flex items-center justify-center p-2 mt-4">
              <img 
                src="/product1.png" 
                alt="Fermented Beetroot Powder" 
                className="h-full object-contain group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            {/* Product Info */}
            <div className="space-y-4 pt-4 flex-grow flex flex-col justify-between">
              
              {/* Product Badges */}
              <div className="flex flex-wrap gap-1.5 justify-start">
                <span className="flex items-center gap-1 bg-[#fdf2f4] text-burgundy text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  <Heart className="w-3.5 h-3.5" />
                  Gut Health
                </span>
                <span className="flex items-center gap-1 bg-[#fdf2f4] text-burgundy text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  Detox
                </span>
                <span className="flex items-center gap-1 bg-[#fdf2f4] text-burgundy text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  <Activity className="w-3.5 h-3.5" />
                  Immunity
                </span>
              </div>
              
              {/* Title & Desc */}
              <div className="space-y-1.5 pt-2">
                <h3 className="font-sans font-bold text-lg text-charcoal">
                  Fermented Beetroot Powder
                </h3>
                <p className="text-xs sm:text-[13px] text-charcoal-muted leading-relaxed font-normal">
                  Supports gut health, immunity and detox with the goodness of real beetroots.
                </p>
              </div>

              {/* Price & Add to Cart */}
              <div className="flex items-center justify-between pt-4 mt-auto">
                <span className="text-xl font-bold text-charcoal font-sans">₹499</span>
                <button 
                  onClick={() => onAddToCart({
                    id: 'fermented-beetroot-powder',
                    name: 'Fermented Beetroot Powder',
                    price: 499,
                    image: '/product1.png',
                    description: 'Supports gut health, immunity and detox.'
                  })}
                  className="flex items-center gap-2 bg-burgundy hover:bg-burgundy-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md active:scale-95"
                >
                  <CartIcon className="w-3.5 h-3.5 text-white" />
                  Add to Cart
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* --- Section 4: Brand Indicators --- */}
        <div className="border-t border-[#e4dfd5]/40 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 items-center justify-between">
            
            {/* Indicator 1 */}
            <div className="flex items-center gap-3 px-4 md:border-r border-[#e4dfd5]/60 justify-start">
              <Leaf className="w-8 h-8 text-burgundy shrink-0" strokeWidth={1.5} />
              <div className="text-left">
                <span className="block text-sm font-bold text-charcoal">100% Natural</span>
                <span className="text-xs text-charcoal-muted font-sans font-normal mt-0.5 block leading-tight">
                  No artificial colors<br />or flavors
                </span>
              </div>
            </div>
            
            {/* Indicator 2 */}
            <div className="flex items-center gap-3 px-4 md:border-r border-[#e4dfd5]/60 justify-start">
              <Beaker className="w-8 h-8 text-burgundy shrink-0" strokeWidth={1.5} />
              <div className="text-left">
                <span className="block text-sm font-bold text-charcoal">Science Backed</span>
                <span className="text-xs text-charcoal-muted font-sans font-normal mt-0.5 block leading-tight">
                  Formulated with<br />research & care
                </span>
              </div>
            </div>

            {/* Indicator 3 */}
            <div className="flex items-center gap-3 px-4 md:border-r border-[#e4dfd5]/60 justify-start">
              <Activity className="w-8 h-8 text-burgundy shrink-0" strokeWidth={1.5} />
              <div className="text-left">
                <span className="block text-sm font-bold text-charcoal">Gut Health Support</span>
                <span className="text-xs text-charcoal-muted font-sans font-normal mt-0.5 block leading-tight">
                  Probiotics & fiber for<br />a healthy gut
                </span>
              </div>
            </div>

            {/* Indicator 4 */}
            <div className="flex items-center gap-3 px-4 md:border-r border-[#e4dfd5]/60 justify-start">
              <Sparkles className="w-8 h-8 text-burgundy shrink-0" strokeWidth={1.5} />
              <div className="text-left">
                <span className="block text-sm font-bold text-charcoal">Clean Ingredients</span>
                <span className="text-xs text-charcoal-muted font-sans font-normal mt-0.5 block leading-tight">
                  No added sugar or<br />preservatives
                </span>
              </div>
            </div>

            {/* Indicator 5 */}
            <div className="flex items-center gap-3 px-4 justify-start">
              <Truck className="w-8 h-8 text-burgundy shrink-0" strokeWidth={1.5} />
              <div className="text-left">
                <span className="block text-sm font-bold text-charcoal">Fast Delivery</span>
                <span className="text-xs text-charcoal-muted font-sans font-normal mt-0.5 block leading-tight">
                  Delivered to your<br />doorstep
                </span>
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer onShopNowClick={onAddToCart} />

    </div>
  )
}
