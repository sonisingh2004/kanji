import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  User, 
  FileText, 
  Edit2, 
  Send, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact({ cartCount, onAddToCart, onCartClick }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agree: false
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple mock submit
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', agree: false })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#fdfcf7] text-[#1c1c1c] selection:bg-burgundy/10 selection:text-burgundy font-sans">
      
      {/* Header */}
      <Header activePage="contact" cartCount={cartCount} onShopNowClick={onAddToCart} onCartClick={onCartClick} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* --- Section 1: Hero Banner --- */}
        <div className="bg-[#fdf2f4]/60 border border-[#e4dfd5]/30 rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 product-hero-bg">
          {/* Background subtle glowing effect */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-burgundy-light/40 rounded-full blur-[100px] -z-10 pointer-events-none" />

          {/* Left Text */}
          <div className="max-w-xl text-left space-y-4 z-10">
            <div>
              <span className="text-burgundy text-xs font-bold tracking-wider uppercase font-sans">
                CONTACT US
              </span>
              <div className="w-12 h-[2px] bg-burgundy mt-2"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-sans font-bold leading-[1.1] tracking-tight text-charcoal">
              We'd Love to <br />
              <span className="text-burgundy">Hear</span> from You
            </h1>
            <p className="text-sm sm:text-base text-charcoal-muted font-sans leading-relaxed max-w-lg font-normal">
              Have a question, feedback, or partnership inquiry? We're here to connect and support you.
            </p>
          </div>

          {/* Right Column Spacer (preserves space for background image visual on desktop) */}
          <div className="w-full md:w-1/2 hidden md:block" />
        </div>

        {/* --- Section 2: Contact Details Cards --- */}
        <div className="bg-white border border-[#e4dfd5]/40 rounded-3xl p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-stretch">
            
            {/* Phone */}
            <div className="flex flex-col items-center text-center px-4 py-4 lg:py-0 border-b sm:border-b-0 sm:border-r border-[#e4dfd5]/60 last:border-0 space-y-4 group">
              <div className="w-12 h-12 rounded-full bg-[#fdf2f4] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Phone className="w-5 h-5 text-burgundy" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-base text-charcoal group-hover:text-burgundy transition-colors duration-300">
                  Phone
                </h4>
                <p className="text-sm font-semibold text-charcoal">
                  +91 98765 43210
                </p>
                <p className="text-xs text-charcoal-muted font-sans font-normal">
                  Mon - Sat: 10 AM - 6 PM
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center px-4 py-4 lg:py-0 border-b sm:border-b-0 lg:border-r border-[#e4dfd5]/60 last:border-0 space-y-4 group">
              <div className="w-12 h-12 rounded-full bg-[#fdf2f4] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5 text-burgundy" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-base text-charcoal group-hover:text-burgundy transition-colors duration-300">
                  Email
                </h4>
                <p className="text-sm font-semibold text-charcoal">
                  hello@banbasiagro.com
                </p>
                <p className="text-xs text-charcoal-muted font-sans font-normal">
                  We reply within 24 hours
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center text-center px-4 py-4 lg:py-0 border-b sm:border-b-0 sm:border-r border-[#e4dfd5]/60 last:border-0 space-y-4 group">
              <div className="w-12 h-12 rounded-full bg-[#fdf2f4] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-burgundy" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-base text-charcoal group-hover:text-burgundy transition-colors duration-300">
                  Address
                </h4>
                <p className="text-sm font-semibold text-charcoal">
                  Banbasi Agro Pvt. Ltd.
                </p>
                <p className="text-xs text-charcoal-muted font-sans font-normal">
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col items-center text-center px-4 py-4 lg:py-0 last:border-0 space-y-4 group">
              <div className="w-12 h-12 rounded-full bg-[#fdf2f4] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Clock className="w-5 h-5 text-burgundy" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-base text-charcoal group-hover:text-burgundy transition-colors duration-300">
                  Business Hours
                </h4>
                <p className="text-sm font-semibold text-charcoal">
                  Mon - Sat: 10 AM - 6 PM
                </p>
                <p className="text-xs text-charcoal-muted font-sans font-normal">
                  Sunday: Closed
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* --- Section 3: Form & Map Split --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white border border-[#e4dfd5]/40 rounded-3xl p-8 text-left space-y-6 shadow-sm">
            <div>
              <h2 className="text-xl sm:text-2xl font-sans font-bold text-charcoal">
                Send Us a Message
              </h2>
              <div className="w-12 h-[2px] bg-burgundy mt-2"></div>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted/80">
                    <User className="w-4 h-4" />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e4dfd5]/60 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none text-sm transition-all bg-transparent font-sans"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted/80">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e4dfd5]/60 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none text-sm transition-all bg-transparent font-sans"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted/80">
                  <Phone className="w-4 h-4" />
                </span>
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e4dfd5]/60 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none text-sm transition-all bg-transparent font-sans"
                />
              </div>

              {/* Subject */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted/80">
                  <FileText className="w-4 h-4" />
                </span>
                <input 
                  type="text" 
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e4dfd5]/60 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none text-sm transition-all bg-transparent font-sans"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <span className="absolute left-4 top-4 text-charcoal-muted/80">
                  <Edit2 className="w-4 h-4" />
                </span>
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e4dfd5]/60 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none text-sm transition-all bg-transparent font-sans resize-none"
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input 
                  type="checkbox" 
                  id="agree"
                  required
                  checked={formData.agree}
                  onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                  className="mt-1 w-4 h-4 rounded text-burgundy focus:ring-burgundy border-[#e4dfd5]/80 accent-burgundy" 
                />
                <label htmlFor="agree" className="text-xs text-charcoal-muted leading-tight font-sans cursor-pointer select-none">
                  I agree to the <Link to="#" className="text-burgundy hover:underline">Privacy Policy</Link> and <Link to="#" className="text-burgundy hover:underline">Terms of Use</Link>.
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={submitted}
                className="w-auto flex items-center bg-burgundy hover:bg-burgundy-hover text-white px-8 py-3.5 rounded-full text-base font-bold shadow-lg shadow-burgundy/10 hover:shadow-xl hover:shadow-burgundy/20 transform hover:-translate-y-[2px] transition-all duration-300 font-sans cursor-pointer active:translate-y-0 disabled:opacity-80"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

            </form>
          </div>

          {/* Right Column: Location & Callout */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between self-stretch">
            
            {/* Map Block */}
            <div className="bg-white border border-[#e4dfd5]/40 rounded-3xl p-8 text-left space-y-6 shadow-sm flex-grow">
              <div>
                <h2 className="text-xl sm:text-2xl font-sans font-bold text-charcoal">
                  Our Location
                </h2>
                <div className="w-12 h-[2px] bg-burgundy mt-2"></div>
              </div>

              {/* Stylized Vector Map representation */}
              <div className="relative w-full h-[280px] bg-[#E8ECE9] rounded-2xl overflow-hidden border border-[#e4dfd5]/60 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full text-white/50" xmlns="http://www.w3.org/2000/svg">
                  {/* Roads grid representation */}
                  <path d="M 0 100 Q 200 80 300 200 T 600 150" stroke="#fcfcfc" strokeWidth="24" fill="none" />
                  <path d="M 100 0 L 150 300" stroke="#fcfcfc" strokeWidth="18" fill="none" />
                  <path d="M 400 0 Q 350 150 500 300" stroke="#fcfcfc" strokeWidth="20" fill="none" />
                  <path d="M 0 250 L 600 220" stroke="#fcfcfc" strokeWidth="16" fill="none" />
                  
                  {/* Road center lines */}
                  <path d="M 0 100 Q 200 80 300 200 T 600 150" stroke="#E2E7E3" strokeWidth="2" strokeDasharray="6,4" fill="none" />
                  <path d="M 100 0 L 150 300" stroke="#E2E7E3" strokeWidth="2" strokeDasharray="6,4" fill="none" />
                  <path d="M 400 0 Q 350 150 500 300" stroke="#E2E7E3" strokeWidth="2" strokeDasharray="6,4" fill="none" />
                  <path d="M 0 250 L 600 220" stroke="#E2E7E3" strokeWidth="2" strokeDasharray="6,4" fill="none" />
                </svg>

                {/* Animated Glowing Pin Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative animate-bounce duration-1000">
                    <MapPin className="w-12 h-12 text-burgundy drop-shadow-xl" fill="#ba1d3b" />
                    {/* Tiny leaf overlay inside map pin */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 text-white scale-75">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  {/* Pin shadow on road */}
                  <div className="w-4 h-1.5 bg-black/20 rounded-full blur-[1px] -mt-1 scale-90"></div>
                </div>
              </div>
            </div>

            {/* Partnership Callout Box */}
            <div className="bg-[#fdf2f4]/60 border border-[#e4dfd5]/30 rounded-3xl p-6 sm:p-8 flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Send className="w-5 h-5 text-burgundy rotate-45 -ml-0.5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-base text-charcoal">
                  Let's Build Something Meaningful
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans font-normal">
                  We're open to collaborations, partnerships, and opportunities that create real impact.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* --- Section 4: Join Us Banner --- */}
        <div className="bg-[#FAF6F0] rounded-3xl p-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          {/* Content Left */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left z-10">
            <div className="w-12 h-12 rounded-full bg-[#fdf2f4] flex items-center justify-center shrink-0 border border-burgundy/10">
              <Users className="w-6 h-6 text-burgundy" />
            </div>
            <div className="space-y-0.5">
              <h2 className="text-xl sm:text-2xl font-sans font-bold text-charcoal tracking-tight">
                Join us in building a healthier India
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted">
                Together, let's improve gut health and fight hidden hunger.
              </p>
            </div>
          </div>

          {/* Content Right */}
          <Link 
            to="/about"
            className="group flex items-center bg-burgundy hover:bg-burgundy-hover text-white px-8 py-3.5 rounded-full text-base font-bold shadow-md tracking-wide transition-all duration-300 font-sans z-10"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </main>

      {/* Footer */}
      <Footer onShopNowClick={onAddToCart} />

    </div>
  )
}
