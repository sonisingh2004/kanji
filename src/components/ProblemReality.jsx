import React from 'react'
import { Atom, Activity, Users, HeartPulse } from 'lucide-react'

export default function ProblemReality() {
  return (
    <section className="bg-white py-20 border-y border-[#e4dfd5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left: Problem Columns (Span 9) */}
          <div className="lg:col-span-9 space-y-12">
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-charcoal text-left">
              The Problem <span className="text-burgundy">We Solve</span>
            </h2>

            {/* Horizontal Column Layout with vertical dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-stretch">
              {[
                {
                  title: "Heavy Post Harvest Losses",
                  desc: "Lack of cold storage and efficient processing leads to huge food wastage.",
                  icon: <Atom className="w-9 h-9 text-white" />
                },
                {
                  title: "Deteriorated Gut Health",
                  desc: "Modern lifestyle and ultra processed food is damaging our gut health.",
                  icon: <Activity className="w-9 h-9 text-white" />
                },
                {
                  title: "Hidden Hunger",
                  desc: "Monotonous food habits lead to deficiencies of essential micronutrients.",
                  icon: <Users className="w-9 h-9 text-white" />
                },
                {
                  title: "Rising Health Concerns",
                  desc: "Gut related issues and nutrient deficiencies are becoming more common.",
                  icon: <HeartPulse className="w-9 h-9 text-white" />
                }
              ].map((prob, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-4 py-4 sm:py-0 border-b sm:border-b-0 sm:border-r border-[#e4dfd5]/60 last:border-0 lg:px-6 space-y-4"
                >
                  {/* Circular Icon Wrapper */}
                  <div className="w-20 h-20 rounded-full bg-burgundy flex items-center justify-center shadow-md shadow-burgundy/10 transform hover:scale-105 transition-transform duration-300">
                    {prob.icon}
                  </div>
                  <div className="space-y-2 flex flex-col justify-between flex-grow">
                    <h3 className="font-sans font-bold text-[16px] text-charcoal leading-snug">
                      {prob.title}
                    </h3>
                    <p className="text-sm text-charcoal-muted leading-relaxed font-sans font-normal max-w-[200px] mx-auto">
                      {prob.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sources */}
            {/* <p className="text-[11px] text-charcoal-muted/70 italic text-left pt-6 border-t border-[#e4dfd5]/40 font-sans">
              Sources: APEDA, <a href="https://jnmhs.com/archive/volume/5/issue/3/article/1879" target="_blank" rel="noopener noreferrer" className="hover:underline text-burgundy">https://jnmhs.com/archive/volume/5/issue/3/article/1879</a>, Indian Diabetic Association.
            </p> */}
          </div>

          {/* Right: The Reality Stats (Span 3, separated by burgundy vertical line) */}
          <div className="lg:col-span-3 lg:border-l lg:border-burgundy/40 lg:pl-10 space-y-8 w-full">
            <h2 className="text-xl font-sans font-bold text-charcoal border-b border-[#e4dfd5]/40 pb-4 text-left">
              The Reality
            </h2>

            <div className="space-y-8">
              {[
                { value: "76M", label: "TONNES", desc: "Annual post harvest losses in India" },
                { value: "70%", label: "", desc: "Urban Indians suffer from gut related issues" },
                { value: "76-80%", label: "", desc: "Population suffers from hidden hunger" },
              ].map((stat, idx) => (
                <div key={idx} className="text-left space-y-1.5 group">
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
                  <p className="text-[15px] text-charcoal-muted font-sans font-medium leading-snug">
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
