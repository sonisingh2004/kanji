import React from 'react'

export const LeafLogoIcon = () => (
  <svg className="w-8 h-8 shrink-0" viewBox="0 0 40 40" fill="none">
    {/* Stem */}
    <path d="M14 34C17.5 30 20 23.5 20.5 13" stroke="#4C8A42" strokeWidth="2.5" strokeLinecap="round" />
    {/* Left Leaf */}
    <path d="M19 19.5C13 20 8.5 22.5 8.5 27.5C8.5 32.5 14 31 19 28C19 28 20 24 19 19.5Z" fill="#4C8A42" stroke="#3b6d32" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Right Leaf */}
    <path d="M20.5 13C25 15.5 29 20 29.5 25C30 30 25.5 29.5 21 27C21 27 19.5 21.5 20.5 13Z" fill="#84C67D" stroke="#4C8A42" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Top Small Leaf */}
    <path d="M20.5 13C18 10 14 8 13.5 12C13 16 17.5 16 20.5 13Z" fill="#B1E6AC" stroke="#4C8A42" strokeWidth="1" strokeLinejoin="round" />
  </svg>
);

export const CartIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

export const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const PlayIcon = () => (
  <svg className="w-2.5 h-2.5 fill-burgundy translate-x-[0.5px]" viewBox="0 0 24 24">
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);

export const IntestineIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    {/* Detailed red intestine icon to match the screenshot */}
    <path d="M8 12C8 9.5 9.5 8 12.5 8C15.5 8 16.5 10 16.5 11.5C16.5 13 15 14.5 12.5 14.5C10 14.5 8 13.5 8 12Z" stroke="#BA1D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 20C24 22.5 22.5 24 19.5 24C16.5 24 15.5 22 15.5 20.5C15.5 19 17 17.5 19.5 17.5C22 17.5 24 18.5 24 20Z" stroke="#BA1D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5 14.5C15.5 14.5 17 16 17 18.5C17 21 15.5 22 13 22C10.5 22 9.5 20.5 9.5 19" stroke="#BA1D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.5 17.5C16.5 17.5 15 16 15 13.5C15 11 16.5 10 19 10C21.5 10 22.5 11.5 22.5 13" stroke="#BA1D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 22C13 24 11 26 8.5 26" stroke="#BA1D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 10C19 8 21 6 23.5 6" stroke="#BA1D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShieldLeafIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    {/* Beautiful leaf icon outline with red lines */}
    <path d="M16 6C16 6 8 11 8 17C8 23 11.5 26 16 26C20.5 26 24 23 24 17C24 11 16 6 16 6Z" stroke="#BA1D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 6V26" stroke="#BA1D3B" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M16 12C13 14 11 17 11 17" stroke="#BA1D3B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 16C19 18 21 21 21 21" stroke="#BA1D3B" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BacteriaIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    {/* Probiotics circle with dotted bacteria cluster */}
    <circle cx="16" cy="16" r="10" stroke="#BA1D3B" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="16" cy="16" r="3.5" stroke="#BA1D3B" strokeWidth="2" />
    <circle cx="12" cy="11" r="2" fill="#BA1D3B" />
    <circle cx="21" cy="12" r="1.5" fill="#BA1D3B" />
    <circle cx="11" cy="19" r="1.5" fill="#BA1D3B" />
    <circle cx="19" cy="20" r="2.5" fill="#BA1D3B" />
  </svg>
);

export const LightningIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <path d="M19 4L7 18H16L13 28L25 14H16L19 4Z" stroke="#BA1D3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const BoxLossIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
    <path d="M12 12l8.73-5.04" />
    <path d="M12 12L3.27 6.96" />
    <path d="M17 17l-4 4m0 0l-1-4m1 4V13" />
  </svg>
);

export const HiddenHungerIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <circle cx="12" cy="14" r="1" fill="currentColor" />
  </svg>
);

export const HeartbeatIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export const CalendarIcon = () => (
  <svg className="w-6 h-6 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <polyline points="9 16 11 18 15 14" />
  </svg>
);

export const CheckIcon = ({ className = "w-5 h-5 text-forest" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const MoleculeIcon = () => (
  <svg className="w-6 h-6 text-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2.5" fill="currentColor" />
    <circle cx="5" cy="12" r="2.5" />
    <circle cx="19" cy="12" r="2.5" />
    <circle cx="12" cy="19" r="2.5" fill="currentColor" />
    <line x1="12" y1="7.5" x2="12" y2="16.5" />
    <line x1="7.5" y1="12" x2="16.5" y2="12" />
    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
  </svg>
);

export const SachetStepIcon = () => (
  <svg className="w-16 h-16 text-burgundy mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="18" y="8" width="28" height="48" rx="2" fill="#fff" strokeWidth="2" />
    <line x1="18" y1="14" x2="46" y2="14" strokeDasharray="2 2" />
    <line x1="18" y1="50" x2="46" y2="50" strokeDasharray="2 2" />
    <path d="M18 20l3 2-3 2" fill="currentColor" />
    <path d="M26 30h12" strokeWidth="2" />
    <path d="M26 36h8" strokeWidth="2" />
    <circle cx="38" cy="36" r="2" fill="currentColor" />
  </svg>
);

export const WaterStepIcon = () => (
  <svg className="w-16 h-16 text-burgundy mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 16 L24 52 A4 4 0 0 0 28 56 H36 A4 4 0 0 0 40 52 L44 16" strokeWidth="2" />
    <path d="M23 44c4 1 8-1 12-1 3 0 5 1 6 1L38 52a2 2 0 0 1-2 2H28a2 2 0 0 1-2-2z" fill="#fcf4f5" />
    <path d="M32 4v24" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="29" cy="32" r="1" fill="currentColor" />
    <circle cx="35" cy="30" r="1.2" fill="currentColor" />
  </svg>
);

export const StirStepIcon = () => (
  <svg className="w-16 h-16 text-burgundy mx-auto" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 16 L24 52 A4 4 0 0 0 28 56 H36 A4 4 0 0 0 40 52 L44 16" strokeWidth="2" />
    <path d="M22 36c4 1 8-1 12-1s8 2 8 2L38 52a2 2 0 0 1-2 2H28a2 2 0 0 1-2-2z" fill="#fcf4f5" />
    <line x1="38" y1="8" x2="28" y2="40" strokeWidth="2" />
    <ellipse cx="27" cy="42" rx="3" ry="1.5" transform="rotate(-15 27 42)" fill="currentColor" />
    <path d="M26 28a10 4 0 0 1 12 0" strokeDasharray="2 2" />
  </svg>
);

export const AmazonLogo = () => (
  <svg className="h-5" viewBox="0 0 100 30" fill="currentColor">
    <path d="M16.5 13.8c0-2.3-.9-4-2.8-4-1.5 0-2.5 1-2.9 2.1h-.1V8.5H6.2v14.4h4.4v-7.2c0-1.8.8-3.1 2.2-3.1 1.3 0 1.9 1 1.9 2.8v7.5h4.4V13.8zM31.2 8.5h-4.3v1.8h-.1c-.6-1.3-1.9-2.2-3.6-2.2-3 0-5.3 2.5-5.3 6.9s2.3 6.9 5.3 6.9c1.7 0 3-.9 3.6-2.2h.1v1.8h4.3V8.5zm-4.3 6.9c0 2.4-1.2 3.8-3 3.8s-3-1.4-3-3.8 1.2-3.8 3-3.8 3 1.4 3 3.8zM47.8 8.5h-4.3v1.8h-.1c-.6-1.3-1.9-2.2-3.6-2.2-3 0-5.3 2.5-5.3 6.9s2.3 6.9 5.3 6.9c1.7 0 3-.9 3.6-2.2h.1v1.8h4.3V8.5zm-4.3 6.9c0 2.4-1.2 3.8-3 3.8s-3-1.4-3-3.8 1.2-3.8 3-3.8 3 1.4 3 3.8zM61.3 8.8l-3.3 9.4-3.4-9.4h-4.6l5.7 14.1-2.1 4.7h4.5l7.9-18.8zM76.5 8.2c-4.4 0-7.3 3.2-7.3 7.2s2.9 7.2 7.3 7.2 7.3-3.2 7.3-7.2-2.9-7.2-7.3-7.2zm0 10.9c-2.3 0-3.6-1.7-3.6-3.7s1.3-3.7 3.6-3.7 3.6 1.7 3.6 3.7-1.3 3.7-3.6 3.7z" />
    <path d="M12.5 25.5c15.2 6.5 44 8 68-1.5 3-.9 5-2.2 4-3.5-.8-1-3.5-.5-6.5.5-20.5 7.5-47.5 5.5-66.5-1.5-2.5-.9-4.5 1-2.5 2z" fill="#FF9900" />
    <path d="M82.5 20.8c.8.9 2 1.3 3 .8.9-.4.9-2 .1-3.3-.9-1.3-2.5-2.3-3.5-1.8-1 .4-1.2 1.9-.4 3.2.2.3.5.7.8 1.1z" fill="#FF9900" />
  </svg>
);

export const FlipkartLogo = () => (
  <div className="flex items-center gap-1 text-[#2874F0] font-bold italic text-base font-sans">
    <span className="text-yellow-400">⚡</span>
    <span>Flipkart</span>
  </div>
);
