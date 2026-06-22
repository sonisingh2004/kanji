import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function CartModal({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false)

  if (!isOpen) return null

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  const handleCheckout = () => {
    setCheckoutSuccess(true)
  }

  const handleWhatsAppOrder = () => {
    const phoneNumber = '911234567890'
    const itemsText = cartItems
      .map(item => `• ${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`)
      .join('\n')
    const message = `Hello Banbasi Agro! I would like to place an order:\n\n*Order Summary:*\n${itemsText}\n\n*Total Amount:* ₹${subtotal}\n\nPlease help me complete my order! Thank you.`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleSuccessClose = () => {
    setCheckoutSuccess(false)
    if (onClearCart) {
      onClearCart()
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden font-sans">
      {/* Backdrop with fade-in and blur */}
      <div
        className="absolute inset-0 bg-[#1c1c1c]/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={checkoutSuccess ? handleSuccessClose : onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        {/* Drawer Panel */}
        <div className="w-screen max-w-[calc(100vw-24px)] sm:max-w-md bg-[#fdfcf7] border-l border-[#e4dfd5]/40 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out translate-x-0 relative">

          {checkoutSuccess ? (
            /* Checkout Success State */
            <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-8 text-center bg-white overflow-y-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f2f8f1] border border-forest/20 rounded-full flex items-center justify-center mb-5 animate-bounce shrink-0">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-forest" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal font-sans mb-2 shrink-0">Order Placed Successfully!</h3>
              <p className="text-xs sm:text-sm text-charcoal-muted font-sans leading-relaxed max-w-xs mb-6 shrink-0">
                Thank you for your order. Your fermented nutrition is on its way to support your gut health!
              </p>

              {/* Order Summary Recap */}
              <div className="w-full bg-[#FAF6F0] rounded-2xl border border-[#e4dfd5]/40 p-4 sm:p-5 mb-6 text-left space-y-3">
                <span className="text-[10px] font-bold text-charcoal-muted uppercase tracking-wider block">Order Details</span>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs text-charcoal gap-2">
                    <span className="truncate">{item.name} <span className="text-charcoal-muted font-normal">x{item.quantity}</span></span>
                    <span className="font-bold shrink-0">₹{item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t border-[#e4dfd5]/60 pt-3 mt-2 flex justify-between text-sm font-bold text-charcoal">
                  <span>Total Paid</span>
                  <span className="text-burgundy">₹{subtotal}</span>
                </div>
              </div>

              <button
                onClick={handleSuccessClose}
                className="w-full py-3.5 bg-burgundy hover:bg-burgundy-hover text-white font-semibold rounded-full shadow-md shadow-burgundy/10 hover:shadow-lg transition-all duration-300 cursor-pointer shrink-0"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            /* Cart Content State */
            <>
              {/* Drawer Header */}
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#e4dfd5]/40 flex items-center justify-between bg-white shrink-0">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-burgundy" />
                  <h2 className="text-base sm:text-lg font-bold text-charcoal font-sans">Shopping Cart</h2>
                  <span className="bg-burgundy-light text-burgundy text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-charcoal/5 text-charcoal-muted hover:text-charcoal transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-12">
                    <div className="w-16 h-16 bg-[#fdf2f4] rounded-full flex items-center justify-center text-burgundy/60 mb-2">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h3 className="text-base font-bold text-charcoal font-sans">Your cart is empty</h3>
                    <p className="text-xs text-charcoal-muted font-sans max-w-[240px] leading-relaxed">
                      Looks like you haven't added any products yet. Take a look at our natural fermented probiotic solutions!
                    </p>
                    <Link
                      to="/products"
                      onClick={onClose}
                      className="px-6 py-2.5 bg-burgundy hover:bg-burgundy-hover text-white text-xs font-bold rounded-full transition-all duration-300 shadow-sm cursor-pointer mt-2 inline-block text-center"
                    >
                      Browse Products
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border border-[#e4dfd5]/40 rounded-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 hover:shadow-xs transition-shadow duration-300"
                      >
                        {/* Product Image */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FAF6F0] rounded-xl border border-[#e4dfd5]/20 flex items-center justify-center p-1.5 sm:p-2 shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0 text-left space-y-1.5">
                          <h4 className="text-xs sm:text-sm font-bold text-charcoal font-sans truncate">
                            {item.name}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-charcoal-muted font-sans line-clamp-1">
                            {item.description}
                          </p>

                          {/* Quantity Selector */}
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <div className="flex items-center border border-[#e4dfd5]/60 rounded-lg bg-[#FAF6F0]/50 shrink-0">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-charcoal-muted hover:text-charcoal transition-colors cursor-pointer"
                              >
                                <Minus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              </button>
                              <span className="text-[10px] sm:text-xs font-bold text-charcoal px-1 min-w-[16px] sm:min-w-[20px] text-center font-sans">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-charcoal-muted hover:text-charcoal transition-colors cursor-pointer"
                              >
                                <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              </button>
                            </div>

                            <span className="text-[10px] sm:text-xs text-charcoal-muted font-sans">
                              ₹{item.price} each
                            </span>
                          </div>
                        </div>

                        {/* Actions (Price & Delete) */}
                        <div className="flex flex-col items-end justify-between self-stretch shrink-0 min-w-[55px] sm:min-w-[70px]">
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="p-1 text-charcoal-muted hover:text-burgundy hover:bg-burgundy-light rounded-lg transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>
                          <span className="text-xs sm:text-sm font-bold text-charcoal font-sans">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-[#e4dfd5]/40 bg-white p-4 sm:p-6 space-y-4 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] shrink-0">
                  {/* Pricing Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm text-charcoal-muted font-sans">
                      <span>Subtotal</span>
                      <span className="font-semibold text-charcoal">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm text-charcoal-muted font-sans">
                      <span>Shipping</span>
                      <span className="font-medium text-forest">FREE</span>
                    </div>
                    <div className="border-t border-[#e4dfd5]/40 my-1 pt-1.5 flex justify-between items-baseline">
                      <span className="text-sm sm:text-base font-bold text-charcoal font-sans">Total</span>
                      <span className="text-lg sm:text-xl font-extrabold text-burgundy font-sans">₹{subtotal}</span>
                    </div>
                  </div>

                  <p className="text-[9px] sm:text-[10px] text-charcoal-muted text-center leading-relaxed">
                    Taxes and shipping computed at next step. Secure checkout.
                  </p>

                  <button
                    onClick={handleCheckout}
                    className="w-full flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-hover text-white py-3 sm:py-4 rounded-full text-sm sm:text-[15px] font-bold tracking-wide shadow-md shadow-burgundy/10 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 sm:py-4 rounded-full text-sm sm:text-[15px] font-bold tracking-wide shadow-md transition-all duration-300 cursor-pointer mt-2"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12.012 2C6.48 2 2 6.48 2 12.012c0 1.73.443 3.42 1.285 4.91L2 22l5.247-1.378a9.96 9.96 0 0 0 4.766 1.21c5.53 0 10.01-4.48 10.01-10.01C22.023 6.48 17.54 2 12.012 2zm.012 18.25a8.21 8.21 0 0 1-4.18-1.15l-.3-.18-3.1.81.82-3.02-.19-.3a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zM15.86 13.43c-.21-.1-.26-.13-.53-.26-.26-.13-.42-.2-.53-.29a1.05 1.05 0 0 0-.42.18c-.1.1-.21.26-.42.53-.2.26-.37.45-.58.55-.21.1-.47-.02-.82-.16a4.88 4.88 0 0 1-1.63-1.01c-.55-.48-.92-1.07-1.02-1.25-.1-.18 0-.28.09-.37.08-.08.18-.21.27-.32.09-.1.12-.18.18-.3a.54.54 0 0 0 0-.5c-.05-.1-.47-1.14-.65-1.56-.17-.4-.36-.34-.52-.34h-.44c-.16 0-.42.06-.64.3-.22.23-.84.82-.84 2s.87 2.33.99 2.5c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.5.58.18 1.11.16 1.53.09.47-.07 1.45-.59 1.65-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.43-.26z" />
                    </svg>
                    Order via WhatsApp
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
