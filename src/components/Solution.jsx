import React from 'react'
import { CalendarIcon, IntestineIcon, MoleculeIcon, ShieldLeafIcon } from './Icons'

export default function Solution() {
  return (
    <section id="our-solution" className="bg-[#FAF6F0] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-4 text-left space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#5c7c58] uppercase block">
                OUR SOLUTION
              </span>
              <h2 className="text-4xl font-serif font-bold text-charcoal leading-none">
                Kanji Powder
              </h2>
              <span className="text-2xl font-serif italic text-burgundy block font-medium">
                (Fermented Beetroot Powder)
              </span>
            </div>

            <div className="space-y-4 text-charcoal-muted text-sm leading-relaxed font-sans">
              <p>
                We developed first of its kind "Fermented Beetroot Powder", an incremental improvement in traditional Kanji Drink.
              </p>
              <p>
                Contrary to old kanji which follows a cumbersome preparation process and limited shelf life, our product can be prepared instantly and have self stable shelf life of &gt; 6 months.
              </p>
            </div>
          </div>

          {/* Center Graphic */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-square">
              <img 
                src="/kanji.png" 
                alt="Kanji Beetroot Powder assembly" 
                className="w-full h-full object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>

          {/* Right Features List */}
          <div className="lg:col-span-4 space-y-6 text-left">
            {[
              {
                title: "Perisiability Increased",
                desc: "From days to 6 months",
                icon: <CalendarIcon />,
                iconBg: "bg-forest-light"
              },
              {
                title: "Probiotics & Prebiotics",
                desc: "(10 CFU) Ensure a Healthy Gut.",
                icon: <IntestineIcon className="w-6 h-6 text-burgundy" />,
                iconBg: "bg-burgundy-light"
              },
              {
                title: "High Bioavailable Micronutrients + Vit-B Series",
                desc: "Combats deficiencies naturally.",
                icon: <MoleculeIcon />,
                iconBg: "bg-burgundy-light"
              },
              {
                title: "Helps in Eliminating Hidden Hunger",
                desc: "Supports everyday nutritional needs.",
                icon: <ShieldLeafIcon className="w-6 h-6 text-forest" />,
                iconBg: "bg-forest-light"
              }
            ].map((feat, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 bg-white/60 hover:bg-white rounded-2xl transition-all duration-300 border border-[#e4dfd5]/30">
                <div className={`${feat.iconBg} p-2 rounded-xl shrink-0`}>
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-charcoal">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted font-sans font-medium mt-0.5">
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
