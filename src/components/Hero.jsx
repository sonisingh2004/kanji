import React from 'react'
import { ArrowRightIcon, PlayIcon, IntestineIcon, ShieldLeafIcon, BacteriaIcon, LightningIcon } from './Icons'

export default function Hero({ onShopNowClick }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24">
      {/* Subtle decorative color washes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-burgundy-light/60 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-forest-light/60 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="inline-block text-burgundy text-sm font-semibold tracking-wider font-serif italic">
              Ancient Fermentation. Modern Nutrition.
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-burgundy leading-[1.12] tracking-tight">
              Fermented Beetroot <br className="hidden sm:inline" />
              Powder for a <br className="hidden sm:inline" />
              <span className="text-[#a62d43] italic">Healthier Gut &</span> <br className="hidden sm:inline" />
              Better Nutrition
            </h1>
            
            <p className="text-base sm:text-lg text-charcoal-muted font-sans leading-relaxed max-w-xl">
              India's first instant fermented beetroot probiotic powder that supports gut health, boosts micronutrients, and is ready in seconds.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onShopNowClick}
                className="group flex items-center bg-burgundy hover:bg-burgundy-hover text-white px-8 py-3.5 rounded-full text-base font-semibold tracking-wide shadow-lg shadow-burgundy/10 hover:shadow-xl hover:shadow-burgundy/20 transform hover:-translate-y-[2px] transition-all duration-300 font-sans cursor-pointer"
              >
                Shop Now
                <ArrowRightIcon />
              </button>
              
              <a 
                href="#our-solution"
                className="flex items-center gap-2 border border-burgundy/30 hover:border-burgundy text-burgundy bg-transparent px-8 py-3.5 rounded-full text-base font-semibold tracking-wide hover:bg-burgundy-light/40 transition-all duration-300 font-sans"
              >
                Learn More
                <span className="w-5 h-5 rounded-full bg-burgundy-light flex items-center justify-center border border-burgundy/20">
                  <PlayIcon />
                </span>
              </a>
            </div>

            {/* Highlight Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 pt-10 border-t border-[#e4dfd5]/60">
              {[
                { label: "Gut Health Support", icon: <IntestineIcon /> },
                { label: "High in Micronutrients", icon: <ShieldLeafIcon /> },
                { label: "Probiotics & Prebiotics", icon: <BacteriaIcon /> },
                { label: "Instant & Easy", icon: <LightningIcon /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="p-1 rounded-lg bg-burgundy-light/60 mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-charcoal leading-tight font-sans">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Graphic */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] lg:max-w-none aspect-[4/3] sm:aspect-square lg:aspect-[1.1] rounded-2xl overflow-visible">
              <img 
                src="/kanji.png" 
                alt="Fermented Beetroot Powder bowl, beetroot juice and sliced beets" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(156,27,48,0.15)] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
