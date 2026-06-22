import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon, PlayIcon, IntestineIcon, ShieldLeafIcon, BacteriaIcon, LightningIcon } from './Icons'

export default function Hero({ onShopNowClick }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-[#fdfcf7] hero-bg">
      {/* Background radial effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-burgundy-light/40 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forest-light/30 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column Content */}
          <div className="lg:col-span-6 text-left space-y-6">

            {/* Small Header Tag */}
            <div className="space-y-2">
              <span className="inline-block text-burgundy text-base font-semibold tracking-wide font-sans">
                Ancient Fermentation. Modern Nutrition.
              </span>
              {/* Short horizontal accent line below tag */}
              <div className="w-7 h-[2px] bg-burgundy rounded-full"></div>
            </div>

            {/* Exact Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-sans font-bold leading-[1.08] tracking-tight text-charcoal">
              Fermented <br />
              Beetroot Powder <br />
              <span className="text-burgundy">for a Healthier Gut &</span> <br />
              <span className="text-burgundy">Better Nutrition</span>
            </h1>

            {/* Description */}
            <p className="text-[16px] sm:text-lg text-charcoal-muted font-sans leading-relaxed max-w-xl font-normal pt-1">
              India's first instant fermented beetroot probiotic powder that supports gut health, boosts micronutrients, and is ready in seconds.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/products"
                className="group flex items-center bg-burgundy hover:bg-burgundy-hover text-white px-8 py-3.5 rounded-full text-base font-semibold tracking-wide shadow-lg shadow-burgundy/10 hover:shadow-xl hover:shadow-burgundy/20 transform hover:-translate-y-[2px] transition-all duration-300 font-sans cursor-pointer"
              >
                Shop Now
                <ArrowRightIcon />
              </Link>

              <a
                href="#our-solution"
                className="group flex items-center gap-2 border border-burgundy/30 hover:border-burgundy text-burgundy bg-transparent px-8 py-3.5 rounded-full text-base font-semibold tracking-wide hover:bg-burgundy-light/40 transition-all duration-300 font-sans"
              >
                Learn More
                <span className="w-5 h-5 rounded-full bg-transparent border border-burgundy/40 flex items-center justify-center group-hover:bg-burgundy-light transition-colors">
                  <PlayIcon />
                </span>
              </a>
            </div>

            {/* Divider Line Columns */}
            <div className="pt-10 flex flex-wrap sm:flex-nowrap gap-6 sm:gap-0 items-center justify-between">

              {/* Point 1 */}
              <div className="flex items-center gap-3 w-[45%] sm:w-auto">
                <div className="p-1 rounded-lg">
                  <IntestineIcon className="w-9 h-9 text-burgundy" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-charcoal leading-tight font-sans">
                    Gut Health
                  </span>
                  <span className="text-xs font-semibold text-charcoal leading-tight font-sans">
                    Support
                  </span>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-[1px] bg-[#e4dfd5]" />

              {/* Point 2 */}
              <div className="flex items-center gap-3 w-[45%] sm:w-auto">
                <div className="p-1 rounded-lg">
                  <ShieldLeafIcon className="w-9 h-9 text-burgundy" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-charcoal leading-tight font-sans">
                    High in
                  </span>
                  <span className="text-xs font-semibold text-charcoal leading-tight font-sans">
                    Micronutrients
                  </span>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-[1px] bg-[#e4dfd5]" />

              {/* Point 3 */}
              <div className="flex items-center gap-3 w-[45%] sm:w-auto">
                <div className="p-1 rounded-lg">
                  <BacteriaIcon className="w-9 h-9 text-burgundy" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-charcoal leading-tight font-sans">
                    Probiotics
                  </span>
                  <span className="text-xs font-semibold text-charcoal leading-tight font-sans">
                    & Prebiotics
                  </span>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-[1px] bg-[#e4dfd5]" />

              {/* Point 4 */}
              <div className="flex items-center gap-3 w-[45%] sm:w-auto">
                <div className="p-1 rounded-lg">
                  <LightningIcon className="w-9 h-9 text-burgundy" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-charcoal leading-tight font-sans">
                    Instant
                  </span>
                  <span className="text-xs font-semibold text-charcoal leading-tight font-sans">
                    & Easy
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Spacer (preserves space for background image visual on desktop) */}
          <div className="lg:col-span-6 hidden lg:block" />

        </div>
      </div>
    </section>
  )
}
