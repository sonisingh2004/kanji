import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  Users, 
  Leaf, 
  Beaker, 
  Heart, 
  RefreshCw, 
  Lightbulb, 
  Rocket, 
  Flag, 
  Target, 
  ArrowRight, 
  TrendingDown, 
  Frown, 
  UserMinus,
  Sparkles,
  Building2,
  CupSoda,
  ThumbsUp,
  Accessibility
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About({ cartCount, onAddToCart, onCartClick }) {
  return (
    <div className="min-h-screen bg-[#fdfcf7] text-[#1c1c1c] selection:bg-burgundy/10 selection:text-burgundy font-sans">
      
      {/* Header */}
      <Header activePage="about" cartCount={cartCount} onShopNowClick={onAddToCart} onCartClick={onCartClick} />

      {/* --- Section 1: Hero --- */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-[#fdfcf7] about-hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="inline-block text-burgundy text-sm font-bold tracking-wider uppercase font-sans">
                ABOUT US
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-sans font-bold leading-[1.1] tracking-tight text-charcoal">
                Building Better Nutrition, <br />
                <span className="text-burgundy">One Sachet</span> at a Time.
              </h1>
              
              <p className="text-base sm:text-lg text-charcoal-muted font-sans leading-relaxed max-w-xl font-normal pt-1">
                We build beetroot-based probiotic powder that can be instantly reconstituted into a functional beverage by simply adding water. Our mission is to improve gut health and combat hidden hunger in urban and sub-urban communities.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="#our-story"
                  className="group flex items-center bg-burgundy hover:bg-burgundy-hover text-white px-8 py-3.5 rounded-full text-base font-semibold tracking-wide shadow-lg shadow-burgundy/10 hover:shadow-xl hover:shadow-burgundy/20 transform hover:-translate-y-[2px] transition-all duration-300 font-sans"
                >
                  Our Story
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
                
                <Link 
                  to="/contact"
                  className="flex items-center gap-2 border border-burgundy/30 hover:border-burgundy text-burgundy bg-transparent px-8 py-3.5 rounded-full text-base font-semibold tracking-wide hover:bg-burgundy-light/40 transition-all duration-300 font-sans cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column Spacer (preserves space for background image visual on desktop) */}
            <div className="lg:col-span-6 hidden lg:block" />

          </div>
        </div>
      </section>

      {/* --- Section 2: Stats Container --- */}
      <section className="py-6 bg-[#fdfcf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fdf2f4]/60 border border-[#e4dfd5]/30 rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-center justify-between">
              
              {/* Stat 1 */}
              <div className="flex items-center justify-center gap-4 px-6 md:border-r border-[#e4dfd5]/60">
                <div className="w-12 h-12 rounded-full bg-[#fdf2f4] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-burgundy" strokeWidth={2} />
                </div>
                <div className="text-left">
                  <span className="block text-2xl font-bold text-charcoal leading-none">2025</span>
                  <span className="text-[11px] font-bold text-charcoal-muted uppercase tracking-wider mt-1 block">ESTABLISHED</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center justify-center gap-4 px-6 md:border-r border-[#e4dfd5]/60">
                <div className="w-12 h-12 rounded-full bg-[#fdf2f4] flex items-center justify-center shrink-0">
                  <CupSoda className="w-6 h-6 text-burgundy" strokeWidth={2} />
                </div>
                <div className="text-left">
                  <span className="block text-2xl font-bold text-charcoal leading-none">1</span>
                  <span className="text-[11px] font-bold text-charcoal-muted uppercase tracking-wider mt-1 block">PRODUCT VARIANT</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center justify-center gap-4 px-6">
                <div className="w-12 h-12 rounded-full bg-[#fdf2f4] flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-burgundy" strokeWidth={2} />
                </div>
                <div className="text-left">
                  <span className="block text-2xl font-bold text-charcoal leading-none">3</span>
                  <span className="text-[11px] font-bold text-charcoal-muted uppercase tracking-wider mt-1 block">TEAM MEMBERS</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Our Story - Why We Started --- */}
      <section id="our-story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Farm Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[550px] aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img 
                  src="/beetroot_farm.png" 
                  alt="Organic beetroot farm sunset rows" 
                  className="w-full h-full object-cover hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="inline-block text-burgundy text-sm font-bold tracking-wider uppercase font-sans">
                OUR STORY
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-charcoal leading-tight">
                Why We Started
              </h2>
              
              <p className="text-base text-charcoal-muted font-sans leading-relaxed font-normal">
                India faces increasing challenges in gut health and hidden hunger. We envisioned an easy-to-consume, nutritious, and shelf-stable fermented beverage that combines traditional wisdom with modern food science.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 4: Vision & Mission Cards --- */}
      <section className="py-12 bg-white border-b border-[#e4dfd5]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="flex gap-5 p-8 bg-[#fdfcf7] rounded-3xl border border-[#e4dfd5]/40 hover:border-burgundy/10 hover:shadow-sm transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-burgundy-light flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Target className="w-7 h-7 text-burgundy" strokeWidth={1.8} />
              </div>
              <div className="text-left space-y-2">
                <h3 className="font-sans font-bold text-lg text-charcoal group-hover:text-burgundy transition-colors duration-300">Our Vision</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed font-sans font-normal">
                  To make functional nutrition accessible to every household.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="flex gap-5 p-8 bg-[#fdfcf7] rounded-3xl border border-[#e4dfd5]/40 hover:border-burgundy/10 hover:shadow-sm transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-burgundy-light flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Flag className="w-7 h-7 text-burgundy" strokeWidth={1.8} />
              </div>
              <div className="text-left space-y-2">
                <h3 className="font-sans font-bold text-lg text-charcoal group-hover:text-burgundy transition-colors duration-300">Our Mission</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed font-sans font-normal">
                  To develop innovative fermented food products that improve health outcomes and reduce nutritional deficiencies.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 5: Our Core Values --- */}
      <section className="py-20 bg-[#fdfcf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div>
            <span className="inline-block text-burgundy text-sm font-bold tracking-wider uppercase font-sans">
              OUR CORE VALUES
            </span>
            <div className="w-12 h-[2px] bg-burgundy mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-stretch pt-4">
            {[
              {
                title: "Nature First",
                desc: "We believe in the purity of nature and its healing potential.",
                icon: <Leaf className="w-6 h-6 text-burgundy" strokeWidth={1.8} />
              },
              {
                title: "Science Driven",
                desc: "Our products are backed by research and real results.",
                icon: <Beaker className="w-6 h-6 text-burgundy" strokeWidth={1.8} />
              },
              {
                title: "Customer Centric",
                desc: "Your health and satisfaction drive everything we do.",
                icon: <Heart className="w-6 h-6 text-burgundy" strokeWidth={1.8} />
              },
              {
                title: "Sustainability",
                desc: "We care for people and the planet, today and always.",
                icon: <RefreshCw className="w-6 h-6 text-burgundy" strokeWidth={1.8} />
              }
            ].map((value, idx) => (
              <div 
                key={idx} 
                className="flex flex-row items-start text-left px-6 py-6 lg:py-2 border-b lg:border-b-0 lg:border-r border-[#e4dfd5]/60 last:border-0 gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#fdf2f4] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {value.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-base text-charcoal group-hover:text-burgundy transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-charcoal-muted leading-relaxed font-sans font-normal">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 6: Our Impact --- */}
      <section className="py-16 bg-[#fdfcf7] border-t border-[#e4dfd5]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div>
            <span className="inline-block text-burgundy text-sm font-bold tracking-wider uppercase font-sans">
              OUR IMPACT
            </span>
            <div className="w-12 h-[2px] bg-burgundy mx-auto mt-2"></div>
          </div>

          <div className="bg-[#fdf2f4]/60 border border-[#e4dfd5]/30 rounded-3xl p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
              {[
                {
                  metric: "76M+",
                  desc: "Tonnes of food lost every year.",
                  icon: <Users className="w-6 h-6 text-burgundy" strokeWidth={1.8} />
                },
                {
                  metric: "70%",
                  desc: "Urban Indians suffer from gut issues.",
                  icon: <ThumbsUp className="w-6 h-6 text-burgundy" strokeWidth={1.8} />
                },
                {
                  metric: "76-80%",
                  desc: "Population suffers from hidden hunger.",
                  icon: <Accessibility className="w-6 h-6 text-burgundy" strokeWidth={1.8} />
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-row items-center gap-4 px-6 md:border-r border-[#e4dfd5]/60 last:border-0 text-left justify-center py-4 md:py-0"
                >
                  <div className="w-12 h-12 rounded-full bg-[#fdf2f4] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-3xl sm:text-4xl font-sans font-extrabold text-burgundy tracking-tight leading-none">
                      {item.metric}
                    </span>
                    <p className="text-xs sm:text-sm text-charcoal-muted font-sans font-normal leading-normal max-w-[220px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 7: Why Banbasi Agro? --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Milestones Timeline */}
            <div className="lg:col-span-6 text-left space-y-8">
              <div>
                <span className="inline-block text-burgundy text-sm font-bold tracking-wider uppercase font-sans">
                  WHY BANBASI AGRO?
                </span>
                <div className="w-12 h-[2px] bg-burgundy mt-2"></div>
              </div>

              {/* Timeline Container */}
              <div className="relative pl-8 border-l border-burgundy/20 space-y-8 ml-4">
                {[
                  {
                    title: "2025",
                    desc: "Established with a vision for better nutrition.",
                    icon: <Calendar className="w-4 h-4 text-burgundy" strokeWidth={2} />
                  },
                  {
                    title: "Research & Development",
                    desc: "In-depth research on fermentation and gut health.",
                    icon: <Beaker className="w-4 h-4 text-burgundy" strokeWidth={2} />
                  },
                  {
                    title: "Product Innovation",
                    desc: "Developed our unique beetroot probiotic powder.",
                    icon: <Lightbulb className="w-4 h-4 text-burgundy" strokeWidth={2} />
                  },
                  {
                    title: "Market Launch",
                    desc: "Bringing clean, effective nutrition to your daily life.",
                    icon: <Rocket className="w-4 h-4 text-burgundy" strokeWidth={2} />
                  },
                  {
                    title: "Health Impact",
                    desc: "Creating a healthier tomorrow for communities across India.",
                    icon: <Heart className="w-4 h-4 text-burgundy" strokeWidth={2} />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle Pin Marker */}
                    <div className="absolute -left-[44px] top-1 w-8 h-8 rounded-full bg-[#fdf2f4] border border-burgundy/30 flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    
                    {/* Milestone Text */}
                    <div className="space-y-1 pl-1">
                      <h4 className="font-sans font-bold text-base text-charcoal group-hover:text-burgundy transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-charcoal-muted leading-relaxed font-sans font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Quote Callout Box */}
            <div className="lg:col-span-6">
              <div className="relative bg-[#fdf2f4]/35 rounded-3xl p-10 sm:p-12 border border-[#e4dfd5]/40 text-left space-y-6 overflow-hidden">
                
                {/* Large Red Quote Mark */}
                <span className="block font-serif text-8xl text-burgundy/15 leading-none absolute -top-2 left-6">
                  “
                </span>
                
                <blockquote className="relative z-10 text-xl sm:text-2xl font-sans font-bold text-charcoal leading-relaxed pt-6">
                  "We believe food can be both traditional and innovative. Kanji Powder is our effort to bring better nutrition to modern lifestyles."
                </blockquote>
                
                <div className="relative z-10 flex flex-col pt-4">
                  <span className="w-8 h-[2px] bg-burgundy rounded-full mb-3"></span>
                  <cite className="not-italic font-sans font-bold text-sm text-burgundy uppercase tracking-wider">
                    Banbasi Agro Team
                  </cite>
                </div>

                {/* Subtle faded background leaves decoration */}
                <div className="absolute right-[-10px] bottom-[-10px] w-36 h-36 opacity-[0.05] pointer-events-none text-burgundy">
                  <Leaf className="w-full h-full rotate-45" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 8: Join Us bottom CTA banner --- */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-burgundy rounded-3xl p-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
            
            {/* Content Left: Icon & Text */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left z-10">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                Join us in building a healthier India.
              </h2>
            </div>

            {/* Content Right: Button */}
            <Link 
              to="/products"
              className="group flex items-center bg-white hover:bg-white-hover text-burgundy px-8 py-3.5 rounded-full text-base font-bold shadow-md tracking-wide transition-all duration-300 font-sans z-10"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Subtle background leave pattern */}
            <div className="absolute right-[-10px] bottom-[-20px] w-48 h-48 opacity-[0.06] pointer-events-none text-white">
              <Leaf className="w-full h-full rotate-90" />
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onShopNowClick={onAddToCart} />

    </div>
  )
}
