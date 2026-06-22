import React from 'react'

export const LeafLogoIcon = () => (
  <svg className="w-8 h-8 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.47.4.13.76-.17.76-.59V17c0-2.2 1.8-4 4-4h2.2c2.2 0 4 1.8 4 4v3.88c0 .42.36.72.76.59C21.13 20.17 24 16.42 24 12A10 10 0 0 0 12 2z" />
    <path d="M12 2v11" />
    <path d="M12 8c2.5 0 5-1.5 6-3.5" />
    <path d="M12 10.5c-2.5 0-5-1.5-6-3.5" />
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
  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const PlayIcon = () => (
  <svg className="w-3 h-3 text-burgundy" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export const IntestineIcon = ({ className = "w-6 h-6 text-burgundy" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8.5c0-1.5 1-2.5 2.5-2.5S11 7.5 11 9s-1 2.5-2.5 2.5S6 10 6 8.5z" />
    <path d="M18 15.5c0 1.5-1 2.5-2.5 2.5S13 16.5 13 15s1-2.5 2.5-2.5s2.5 1.5 2.5 2.5z" />
    <path d="M8.5 11.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5s-1-2.5-2.5-2.5s-2.5 1-2.5 2.5z" />
    <path d="M12 6a4 4 0 0 0-4-4C5 2 3 4.5 3 7.5S5.5 13 7.5 13" />
    <path d="M12 18a4 4 0 0 0 4 4c3 0 5-2.5 5-5.5s-2.5-5.5-4.5-5.5" />
    <path d="M7.5 13c1 0 2.5-.5 3.5-1.5s1-2 2-2 1.5.5 2 1.5.5 2 1.5 2" />
  </svg>
);

export const ShieldLeafIcon = ({ className = "w-6 h-6 text-burgundy" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8a3 3 0 0 1 3 3c0 2-3 5-3 5s-3-3-3-5a3 3 0 0 1 3-3z" />
    <path d="M12 11v3" />
  </svg>
);

export const BacteriaIcon = ({ className = "w-6 h-6 text-burgundy" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <circle cx="6" cy="7" r="2.5" />
    <circle cx="18" cy="7" r="2" />
    <circle cx="6" cy="17" r="1.8" />
    <circle cx="17" cy="17" r="2.2" />
    <path d="M8.5 8.5l4 4" />
    <path d="M15.5 8.5l-3.5 3.5" />
    <path d="M7.5 15.5l3.5-3.5" />
    <path d="M15.5 15.5l-3.5-3.5" />
  </svg>
);

export const LightningIcon = ({ className = "w-6 h-6 text-burgundy" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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
