import React from 'react'
import { LeafLogoIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-[#e4dfd5] py-12 border-t border-[#e4dfd5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <LeafLogoIcon />
          <div className="flex flex-col text-left">
            <span className="font-serif text-base font-bold text-white leading-none">
              Banbasi Agro
            </span>
            <span className="text-[10px] text-[#5c7c58] font-sans font-medium tracking-wide">
              Pvt. Ltd.
            </span>
          </div>
        </div>
        <p className="text-xs text-[#e4dfd5]/60 font-sans">
          © {new Date().getFullYear()} Banbasi Agro Pvt. Ltd. All rights reserved. Made exactly matching specifications.
        </p>
      </div>
    </footer>
  )
}
