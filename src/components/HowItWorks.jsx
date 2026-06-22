import React from 'react'

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 border-b border-[#e4dfd5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <h2 className="text-3xl sm:text-4xl font-sans font-bold text-charcoal">
          How It <span className="text-burgundy">Works?</span>
        </h2>

        {/* Responsive visual steps container */}
        <div className="relative flex justify-center items-center">
          <img 
            src="/steps.png" 
            alt="Beetroot powder preparation steps: 1 Open Sachet, 2 Add Water, 3 Stir / Shake, 4 Drink & Feel Better" 
            className="w-full max-w-5xl h-auto object-contain hover:scale-[1.01] transition-transform duration-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.02)]"
          />
        </div>
        
      </div>
    </section>
  )
}
