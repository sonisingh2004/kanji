import React from 'react'
import { IntestineIcon, CheckIcon, ShieldLeafIcon, MoleculeIcon, SachetStepIcon } from './Icons'

export default function Benefits() {
  return (
    <section className="py-20 bg-[#fdfcf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
          Benefits <span className="text-burgundy">You'll Love</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Supports Gut Health",
              desc: "Improves digestion and gut balance",
              icon: <IntestineIcon className="w-8 h-8 text-burgundy" />,
              iconBg: "bg-burgundy-light"
            },
            {
              title: "Boosts Immunity",
              desc: "Strengthens your natural defenses",
              icon: <CheckIcon className="w-8 h-8 text-forest" />,
              iconBg: "bg-forest-light"
            },
            {
              title: "Rich in Micronutrients",
              desc: "Combats hidden hunger effectively",
              icon: <ShieldLeafIcon className="w-8 h-8 text-forest" />,
              iconBg: "bg-forest-light"
            },
            {
              title: "Detox & Antioxidant",
              desc: "Helps in detoxification and cellular protection",
              icon: <MoleculeIcon className="w-8 h-8 text-burgundy" />,
              iconBg: "bg-burgundy-light"
            },
            {
              title: "Portable & Convenient",
              desc: "Easy to carry, anywhere, anytime",
              icon: <SachetStepIcon />,
              iconBg: "bg-[#fcf7ef]"
            },
            {
              title: "Sugar Free & Healthy",
              desc: "Guilt free nutrition for everyone",
              icon: (
                <svg className="w-8 h-8 text-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <rect x="9" y="9" width="6" height="6" fill="currentColor" opacity="0.3" />
                </svg>
              ),
              iconBg: "bg-burgundy-light"
            }
          ].map((benefit, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-[#e4dfd5]/40 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-burgundy/10 transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
            >
              <div className={`${benefit.iconBg} p-4 rounded-full flex items-center justify-center shrink-0 w-16 h-16`}>
                {benefit.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-sans font-bold text-base text-charcoal group-hover:text-burgundy transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
