import React from 'react'
import { BoxLossIcon, IntestineIcon, HiddenHungerIcon, HeartbeatIcon } from './Icons'

export default function ProblemReality() {
  return (
    <section className="bg-white py-20 border-y border-[#e4dfd5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Problem Grid */}
          <div className="lg:col-span-9 space-y-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal text-left">
              The Problem <span className="text-burgundy">We Solve</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Heavy Post Harvest Losses",
                  desc: "Lack of cold storage and efficient processing leads to huge food wastage.",
                  icon: <BoxLossIcon />,
                  iconBg: "bg-burgundy"
                },
                {
                  title: "Deteriorated Gut Health",
                  desc: "Modern lifestyle and ultra processed food is damaging our gut health.",
                  icon: <IntestineIcon className="w-6 h-6 text-white" />,
                  iconBg: "bg-burgundy"
                },
                {
                  title: "Hidden Hunger",
                  desc: "Monotonous food habits lead to deficiencies of essential micronutrients.",
                  icon: <HiddenHungerIcon />,
                  iconBg: "bg-burgundy"
                },
                {
                  title: "Rising Health Concerns",
                  desc: "Gut related issues and nutrient deficiencies are becoming more common.",
                  icon: <HeartbeatIcon />,
                  iconBg: "bg-burgundy"
                }
              ].map((prob, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl hover:bg-[#fdfcf7] transition-all duration-300 border border-transparent hover:border-[#e4dfd5]/40 group">
                  <div className={`${prob.iconBg} p-3 rounded-xl flex items-center justify-center shrink-0 w-12 h-12 shadow-md shadow-burgundy/10`}>
                    {prob.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-bold text-base text-charcoal group-hover:text-burgundy transition-colors duration-300">
                      {prob.title}
                    </h3>
                    <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                      {prob.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sources */}
            <p className="text-[11px] text-charcoal-muted/70 italic text-left pt-4 border-t border-[#e4dfd5]/40">
              Sources: APEDA, <a href="https://jnmhs.com/archive/volume/5/issue/3/article/1879" target="_blank" rel="noopener noreferrer" className="hover:underline text-burgundy">https://jnmhs.com/archive/volume/5/issue/3/article/1879</a>, Indian Diabetic Association.
            </p>
          </div>

          {/* Right: The Reality Stats */}
          <div className="lg:col-span-3 lg:border-l lg:border-[#e4dfd5]/60 lg:pl-10 space-y-8 w-full">
            <h2 className="text-xl font-serif font-bold text-charcoal border-b border-[#e4dfd5]/40 pb-4 text-left">
              The Reality
            </h2>

            <div className="space-y-8">
              {[
                { value: "76M", label: "TONNES", desc: "Annual post harvest losses in India" },
                { value: "70%", label: "", desc: "Urban Indians suffer from gut related issues" },
                { value: "76-80%", label: "", desc: "Population suffers from hidden hunger" },
              ].map((stat, idx) => (
                <div key={idx} className="text-left space-y-1 group">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-sans font-extrabold text-burgundy tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block origin-left">
                      {stat.value}
                    </span>
                    {stat.label && (
                      <span className="text-xs font-bold text-burgundy font-sans tracking-wider">
                        {stat.label}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-charcoal-muted font-sans font-medium leading-snug">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
