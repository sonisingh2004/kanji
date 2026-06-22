import React from 'react'

export default function WhatsAppWidget() {
  const phoneNumber = '911234567890' // Matches contact phone: +91 98765 43210
  const message = 'Hello! I have a question about Banbasi Agro\'s fermented beetroot products.'
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[99] group flex items-center gap-3 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden max-w-[56px] hover:max-w-[200px]"
      title="Chat on WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:hidden" />

      {/* Official WhatsApp Logo SVG */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 sm:w-7 sm:h-7 shrink-0"
      >
        <path d="M12.012 2C6.48 2 2 6.48 2 12.012c0 1.73.443 3.42 1.285 4.91L2 22l5.247-1.378a9.96 9.96 0 0 0 4.766 1.21c5.53 0 10.01-4.48 10.01-10.01C22.023 6.48 17.54 2 12.012 2zm.012 18.25a8.21 8.21 0 0 1-4.18-1.15l-.3-.18-3.1.81.82-3.02-.19-.3a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zM15.86 13.43c-.21-.1-.26-.13-.53-.26-.26-.13-.42-.2-.53-.29a1.05 1.05 0 0 0-.42.18c-.1.1-.21.26-.42.53-.2.26-.37.45-.58.55-.21.1-.47-.02-.82-.16a4.88 4.88 0 0 1-1.63-1.01c-.55-.48-.92-1.07-1.02-1.25-.1-.18 0-.28.09-.37.08-.08.18-.21.27-.32.09-.1.12-.18.18-.3a.54.54 0 0 0 0-.5c-.05-.1-.47-1.14-.65-1.56-.17-.4-.36-.34-.52-.34h-.44c-.16 0-.42.06-.64.3-.22.23-.84.82-.84 2s.87 2.33.99 2.5c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.5.58.18 1.11.16 1.53.09.47-.07 1.45-.59 1.65-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.43-.26z" />
      </svg>

      {/* Floating Tooltip / Slide-out Text */}
      <span className="text-sm font-bold tracking-wide whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[140px] opacity-0 group-hover:opacity-100 transition-all duration-300 pr-1">
        Chat with us
      </span>
    </a>
  )
}
