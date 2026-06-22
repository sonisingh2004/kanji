import React from 'react'
import { CartIcon, AmazonLogo, FlipkartLogo, CheckIcon } from './Icons'

export default function ProductCTA({ onAddToCart }) {
  return (
    <section className="pb-24 pt-8 bg-[#fdfcf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF6F0] rounded-3xl border border-[#e4dfd5]/60 p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Product Info (Left) */}
            <div className="lg:col-span-5 text-left space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal leading-tight">
                  Fermented Beetroot <br /> Powder
                </h2>
                <p className="text-sm font-semibold text-charcoal-muted tracking-wide font-sans">
                  20 Sachets | Instant Drink Mix
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-sans font-extrabold text-charcoal">
                  ₹299
                </span>
                <span className="text-xs text-charcoal-muted font-sans font-semibold line-through">
                  ₹399
                </span>
                <span className="text-xs text-forest font-sans font-bold bg-forest-light px-2 py-0.5 rounded">
                  25% OFF
                </span>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <button 
                  onClick={onAddToCart}
                  className="flex items-center justify-center bg-burgundy hover:bg-burgundy-hover text-white w-full sm:w-auto px-10 py-4 rounded-full text-base font-bold shadow-lg shadow-burgundy/10 hover:shadow-xl hover:shadow-burgundy/20 transform hover:-translate-y-[2px] transition-all duration-300 font-sans cursor-pointer group"
                >
                  <CartIcon className="w-5 h-5 mr-2 transform group-hover:scale-110 transition-transform" />
                  Add to Cart
                </button>

                {/* Marketplace availability */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs font-bold text-charcoal-muted font-sans uppercase tracking-wider">
                    Also available on
                  </span>
                  <div className="flex gap-3">
                    <a href="https://amazon.in" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white px-3 py-1.5 rounded-lg border border-[#e4dfd5]/60 hover:shadow-sm transition-all duration-300">
                      <AmazonLogo />
                    </a>
                    <a href="https://flipkart.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white px-3 py-1.5 rounded-lg border border-[#e4dfd5]/60 hover:shadow-sm transition-all duration-300">
                      <FlipkartLogo />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Visual (Center) */}
            <div className="lg:col-span-3 flex justify-center lg:-my-8">
              <div className="relative w-full max-w-[260px] aspect-square">
                <img 
                  src="/kanji.png" 
                  alt="Fermented Beetroot Powder box packaging" 
                  className="w-full h-full object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Benefits checklist (Right) */}
            <div className="lg:col-span-4 space-y-4 lg:pl-6 text-left">
              {[
                { text: "100% Plant Based", bg: "bg-forest-light", textCol: "text-[#5c7c58]", strokeCol: "text-forest" },
                { text: "No Artificial Flavours", bg: "bg-[#fdf7ee]", textCol: "text-[#d08c38]", strokeCol: "text-orange-500" },
                { text: "No Added Sugar", bg: "bg-burgundy-light", textCol: "text-[#a62d43]", strokeCol: "text-burgundy" },
                { text: "Self Stable &gt; 6 Months", bg: "bg-forest-light", textCol: "text-[#5c7c58]", strokeCol: "text-forest" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`${item.bg} p-1.5 rounded-full shrink-0 flex items-center justify-center border border-[#e4dfd5]/20`}>
                    <CheckIcon className={`w-4 h-4 ${item.strokeCol}`} />
                  </div>
                  <span 
                    className="font-sans font-bold text-sm text-charcoal"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
