import React from 'react'
import { SachetStepIcon, WaterStepIcon, StirStepIcon } from './Icons'

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 border-b border-[#e4dfd5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
          How It <span className="text-burgundy">Works?</span>
        </h2>

        <div className="relative">
          {/* Connecting dashed line for desktop */}
          <div className="absolute top-[60px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-[#e4dfd5]/80 -z-10 hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            
            {/* Step 1 */}
            <div className="space-y-4 group">
              <div className="w-28 h-28 mx-auto rounded-full bg-[#fdfcf7] border border-[#e4dfd5]/60 shadow-md flex items-center justify-center group-hover:scale-105 group-hover:border-burgundy/40 transition-all duration-300">
                <SachetStepIcon />
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-6 h-6 rounded-full bg-burgundy text-white font-sans text-xs font-bold flex items-center justify-center">1</span>
                <span className="font-sans font-bold text-sm text-charcoal group-hover:text-burgundy transition-colors duration-300">Open Sachet</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 group">
              <div className="w-28 h-28 mx-auto rounded-full bg-[#fdfcf7] border border-[#e4dfd5]/60 shadow-md flex items-center justify-center group-hover:scale-105 group-hover:border-burgundy/40 transition-all duration-300">
                <WaterStepIcon />
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-6 h-6 rounded-full bg-burgundy text-white font-sans text-xs font-bold flex items-center justify-center">2</span>
                <span className="font-sans font-bold text-sm text-charcoal group-hover:text-burgundy transition-colors duration-300">Add Water</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 group">
              <div className="w-28 h-28 mx-auto rounded-full bg-[#fdfcf7] border border-[#e4dfd5]/60 shadow-md flex items-center justify-center group-hover:scale-105 group-hover:border-burgundy/40 transition-all duration-300">
                <StirStepIcon />
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-6 h-6 rounded-full bg-burgundy text-white font-sans text-xs font-bold flex items-center justify-center">3</span>
                <span className="font-sans font-bold text-sm text-charcoal group-hover:text-burgundy transition-colors duration-300">Stir / Shake</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-4 group">
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border border-[#e4dfd5]/60 shadow-md flex items-center justify-center group-hover:scale-105 group-hover:border-burgundy/40 transition-all duration-300">
                <img 
                  src="/woman_drinking.png" 
                  alt="Woman drinking beetroot juice" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-6 h-6 rounded-full bg-burgundy text-white font-sans text-xs font-bold flex items-center justify-center">4</span>
                <span className="font-sans font-bold text-sm text-charcoal group-hover:text-burgundy transition-colors duration-300">Drink & Feel Better</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
