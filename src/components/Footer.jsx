import React from 'react'
import { Link } from 'react-router-dom'
import { LeafLogoIcon } from './Icons'

// --- Footer Specific Icons ---
const InstantMixIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Mug/Cup Icon */}
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <rect x="3" y="8" width="14" height="11" rx="2" />
    <line x1="6" y1="2" x2="6" y2="4" strokeLinecap="round" />
    <line x1="10" y1="2" x2="10" y2="4" strokeLinecap="round" />
    <line x1="14" y1="2" x2="14" y2="4" strokeLinecap="round" />
  </svg>
);

const PlantBasedIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    {/* 3 Leaves Icon */}
    <path d="M12 2a15 15 0 0 0-9 9c0 5 4 9 9 9s9-4 9-9a15 15 0 0 0-9-9z" />
    <path d="M12 11V2" />
    <path d="M12 11c-2-2-5-3-5-3" />
    <path d="M12 11c2-2 5-3 5-3" />
  </svg>
);

const GutFriendlyIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Winding Intestine Shape */}
    <path d="M6 9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H9a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SustainableIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Leaf inside a circular badge */}
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8a4 4 0 0 1 4 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 0 1 4-4z" />
    <line x1="12" y1="12" x2="12" y2="15" />
  </svg>
);

// --- Social Icons ---
const InstagramIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

// --- Contact Icons ---
const PhoneIcon = () => (
  <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function Footer({ onShopNowClick }) {
  return (
    <footer className="w-full">

      {/* --- Part 1: Top Burgundy Banner --- */}
      <div className="relative bg-[#8b001a] py-8 overflow-hidden text-left border-b border-white/10">

        {/* Beetroot Left/Right Faded Vector Backgrounds */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 opacity-15 pointer-events-none text-white">
          <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
            <path d="M32 4c-5 0-9 4-9 9 0 3 2 6 4 8C20 23 16 28 16 34c0 10 7 18 16 18s16-8 16-18c0-6-4-11-11-13 2-2 4-5 4-8 0-5-4-9-9-9zM25 13c0-3.8 3.2-7 7-7s7 3.2 7 7-3.2 7-7 7-7-3.2-7-7z" />
          </svg>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 opacity-15 pointer-events-none text-white">
          <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
            <path d="M32 4c-5 0-9 4-9 9 0 3 2 6 4 8C20 23 16 28 16 34c0 10 7 18 16 18s16-8 16-18c0-6-4-11-11-13 2-2 4-5 4-8 0-5-4-9-9-9zM25 13c0-3.8 3.2-7 7-7s7 3.2 7 7-3.2 7-7 7-7-3.2-7-7z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">

            {/* Wellness Text Block */}
            <div className="space-y-1.5 text-center lg:text-left">
              <p className="text-white/80 text-xs sm:text-sm font-sans tracking-wide uppercase font-bold">
                A healthier gut. A better you.
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Start Your Wellness Journey Today!
              </h2>
            </div>

            {/* Icons Indicators Block */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">

              {/* Indicator 1 */}
              <div className="flex flex-col items-center gap-1.5 px-3">
                <InstantMixIcon />
                <span className="text-[11px] font-bold text-white/90 uppercase tracking-wide font-sans">
                  Instant Mix
                </span>
              </div>

              <div className="h-8 w-[1px] bg-white/20" />

              {/* Indicator 2 */}
              <div className="flex flex-col items-center gap-1.5 px-3">
                <PlantBasedIcon />
                <span className="text-[11px] font-bold text-white/90 uppercase tracking-wide font-sans">
                  Plant Based
                </span>
              </div>

              <div className="h-8 w-[1px] bg-white/20" />

              {/* Indicator 3 */}
              <div className="flex flex-col items-center gap-1.5 px-3">
                <GutFriendlyIcon />
                <span className="text-[11px] font-bold text-white/90 uppercase tracking-wide font-sans">
                  Gut Friendly
                </span>
              </div>

              <div className="h-8 w-[1px] bg-white/20" />

              {/* Indicator 4 */}
              <div className="flex flex-col items-center gap-1.5 px-3">
                <SustainableIcon />
                <span className="text-[11px] font-bold text-white/90 uppercase tracking-wide font-sans">
                  Sustainable
                </span>
              </div>

            </div>

            {/* Shop Now Button */}
            <Link
              to="/products"
              className="bg-white hover:bg-white-hover text-burgundy hover:scale-105 px-8 py-3 rounded-xl text-base font-bold shadow-md tracking-wide transition-all duration-300 font-sans shrink-0 cursor-pointer flex items-center justify-center"
            >
              Shop Now &rarr;
            </Link>

          </div>
        </div>
      </div>

      {/* --- Part 2: Main Dark Burgundy Footer --- */}
      <div className="bg-[#4a020b] py-16 text-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 items-start pb-12 border-b border-white/10">

            {/* Column 1: Logo & About (Left - Span 3) */}
            <div className="lg:col-span-3 space-y-6 lg:border-r lg:border-white/10 lg:pr-8">
              <Link
                to="/"
                className="flex items-center gap-1"
              >
                <LeafLogoIcon />
                <div className="flex flex-col pl-1 text-left">
                  <span className="font-sans text-xl font-bold text-white leading-none tracking-tight">
                    Banbasi Agro
                  </span>
                  <span className="text-xs text-forest-light font-sans font-medium tracking-wide mt-1">
                    Pvt. Ltd.
                  </span>
                </div>
              </Link>

              <p className="text-sm text-white/70 leading-relaxed font-sans font-normal">
                We build beetroot based probiotic powder for gut health and hidden hunger.
              </p>

              {/* Social Media Circular Buttons */}
              <div className="flex items-center gap-3">
                {[
                  { icon: <InstagramIcon />, url: "#" },
                  { icon: <FacebookIcon />, url: "#" },
                  { icon: <LinkedinIcon />, url: "#" },
                  { icon: <YoutubeIcon />, url: "#" }
                ].map((social, idx) => (
                  <Link
                    key={idx}
                    to={social.url}
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors duration-300"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links (Span 1.5) */}
            <div className="lg:col-span-1.5 space-y-4">
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-white">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-[13px] text-white/70 font-sans">
                <li>
                  <Link
                    to="/"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li><Link to="/#benefits" className="hover:text-white transition-colors">Benefits</Link></li>
                <li><Link to="/#science" className="hover:text-white transition-colors">Science</Link></li>
              </ul>
            </div>

            {/* Column 3: Customer Care (Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-white">
                Customer Care
              </h3>
              <ul className="space-y-2.5 text-[13px] text-white/70 font-sans">
                <li><Link to="#faqs" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link to="#shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                <li><Link to="#returns" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link to="#terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="#privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Column 4: Shop (Span 1.5) */}
            <div className="lg:col-span-1.5 space-y-4">
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-white">
                Shop
              </h3>
              <ul className="space-y-2.5 text-[13px] text-white/70 font-sans">
                <li><Link to="/products" className="hover:text-white transition-colors">Shop Now</Link></li>
                <li><Link to="#track-order" className="hover:text-white transition-colors">Track Order</Link></li>
                <li><Link to="#my-account" className="hover:text-white transition-colors">My Account</Link></li>
                <li><Link to="#cart" className="hover:text-white transition-colors">Cart</Link></li>
              </ul>
            </div>

            {/* Column 5: Contact Us (Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-white">
                Contact Us
              </h3>
              <ul className="space-y-3.5 text-[13px] text-white/70 font-sans">
                <li className="flex items-center gap-3">
                  <PhoneIcon />
                  <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon />
                  <a href="mailto:info@banbasiagro.com" className="hover:text-white transition-colors">info@banbasiagro.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPinIcon />
                  <span>India</span>
                </li>
              </ul>
            </div>

            {/* Column 6: Newsletter (Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-white">
                Newsletter
              </h3>
              <p className="text-[13px] text-white/70 font-sans leading-relaxed">
                Stay updated with health tips and offers.
              </p>
              {/* Form Input Group */}
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center rounded-lg overflow-hidden bg-white max-w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3.5 py-2.5 text-xs text-charcoal outline-none font-sans"
                  required
                />
                <button
                  type="submit"
                  className="bg-burgundy hover:bg-burgundy-hover p-2.5 flex items-center justify-center transition-colors shrink-0"
                >
                  <SendIcon />
                </button>
              </form>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="pt-8 flex items-center justify-center">
            <p className="text-[13px] text-white/50 font-sans">
              © 2026 Briskode Technology Pvt Ltd. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>

    </footer>
  )
}
