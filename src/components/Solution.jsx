import React from 'react'
import { Calendar, Activity, Atom, Leaf } from 'lucide-react'

export default function Solution() {
  return (
    <section 
      id="our-solution" 
      className="relative py-20 border-b border-[#e4dfd5]/30 bg-[#FAF6F0] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/hero-kanji.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Solution Text */}
          <div className="lg:col-span-4 text-left space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-forest uppercase block">
                OUR SOLUTION
              </span>
              <h2 className="text-4xl font-sans font-bold text-charcoal leading-none">
                Kanji Powder
              </h2>
              <span className="text-2xl font-sans italic text-burgundy block font-medium">
                (Fermented Beetroot Powder)
              </span>
            </div>

            <div className="space-y-4 text-charcoal-muted text-sm leading-relaxed font-sans font-normal">
              <p>
                We developed first of its kind "Fermented Beetroot Powder", an incremental improvement in traditional Kanji Drink.
              </p>
              <p>
                Contrary to old kanji which follows a cumbersome preparation process and limited shelf life, our product can be prepared instantly and have self stable shelf life of &gt; 6 months.
              </p>
            </div>
          </div>

          {/* Center Column Spacer (leaves space for background image visual on desktop) */}
          <div className="lg:col-span-4 hidden lg:block" />

          {/* Right Column: Features with circular white badges and Lucide icons */}
          <div className="lg:col-span-4 space-y-6 text-left">
            {[
              {
                title: "Perisiability Increased",
                desc: "From days to 6 months",
                icon: <Calendar className="w-6 h-6 text-forest" strokeWidth={1.8} />
              },
              {
                title: "Probiotics & Prebiotics",
                desc: "(10 CFU) Ensure a Healthy Gut.",
                icon: <Activity className="w-6 h-6 text-burgundy" strokeWidth={1.8} />
              },
              {
                title: "High Bioavailable Micronutrients + Vit-B Series",
                desc: "Combats deficiencies naturally.",
                icon: <Atom className="w-6 h-6 text-burgundy" strokeWidth={1.8} />
              },
              {
                title: "Helps in Eliminating Hidden Hunger",
                desc: "Supports everyday nutritional needs.",
                icon: <Leaf className="w-6 h-6 text-forest" strokeWidth={1.8} />
              }
            ].map((feat, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 group"
              >
                {/* Circular Badge - White with thin border and subtle shadow */}
                <div className="w-16 h-16 rounded-full bg-white border border-[#e4dfd5]/60 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-burgundy/10 transition-transform duration-300">
                  {feat.icon}
                </div>
                
                {/* Text Description */}
                <div className="space-y-0.5">
                  <h3 className="font-sans font-bold text-sm text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] font-sans font-medium">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
