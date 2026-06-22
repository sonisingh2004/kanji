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

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        {/* Drawer Panel */}
        <div className="w-screen sm:max-w-md bg-[#fdfcf7] border-l border-[#e4dfd5]/40 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out translate-x-0 relative">
          
          {checkoutSuccess ? (
            /* Checkout Success State */
            <div className="flex-1 flex flex-col justify-center items-center p-8 text-center bg-white">
              <div className="w-16 h-16 bg-[#f2f8f1] border border-forest/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <CheckCircle2 className="w-8 h-8 text-forest" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal font-sans mb-3">Order Placed Successfully!</h3>
              <p className="text-sm text-charcoal-muted font-sans leading-relaxed max-w-xs mb-8">
                Thank you for your order. Your fermented nutrition is on its way to support your gut health!
              </p>
              
              {/* Order Summary Recap */}
              <div className="w-full bg-[#FAF6F0] rounded-2xl border border-[#e4dfd5]/40 p-5 mb-8 text-left space-y-3">
                <span className="text-[10px] font-bold text-charcoal-muted uppercase tracking-wider block">Order Details</span>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-xs text-charcoal">
                    <span>{item.name} <span className="text-charcoal-muted font-normal">x{item.quantity}</span></span>
                    <span className="font-bold">₹{item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t border-[#e4dfd5]/60 pt-3 mt-2 flex justify-between text-sm font-bold text-charcoal">
                  <span>Total Paid</span>
                  <span className="text-burgundy">₹{subtotal}</span>
                </div>
              </div>

              <button
                onClick={handleSuccessClose}
                className="w-full py-4 bg-burgundy hover:bg-burgundy-hover text-white font-semibold rounded-full shadow-md shadow-burgundy/10 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            /* Cart Content State */
            <>
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-[#e4dfd5]/40 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-burgundy" />
                  <h2 className="text-lg font-bold text-charcoal font-sans">Shopping Cart</h2>
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
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
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
                        className="bg-white border border-[#e4dfd5]/40 rounded-2xl p-4 flex items-center gap-4 hover:shadow-xs transition-shadow duration-300"
                      >
                        {/* Product Image */}
                        <div className="w-20 h-20 bg-[#FAF6F0] rounded-xl border border-[#e4dfd5]/20 flex items-center justify-center p-2 shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0 text-left space-y-1.5">
                          <h4 className="text-sm font-bold text-charcoal font-sans truncate">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-charcoal-muted font-sans line-clamp-1">
                            {item.description}
                          </p>
                          
                          {/* Quantity Selector */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-[#e4dfd5]/60 rounded-lg bg-[#FAF6F0]/50">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="px-2 py-1 text-charcoal-muted hover:text-charcoal transition-colors cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold text-charcoal px-1.5 min-w-[20px] text-center font-sans">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="px-2 py-1 text-charcoal-muted hover:text-charcoal transition-colors cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            
                            <span className="text-xs text-charcoal-muted font-sans">
                              ₹{item.price} each
                            </span>
                          </div>
                        </div>

                        {/* Actions (Price & Delete) */}
                        <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="p-1.5 text-charcoal-muted hover:text-burgundy hover:bg-burgundy-light rounded-lg transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <span className="text-sm font-bold text-charcoal font-sans">
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
                <div className="border-t border-[#e4dfd5]/40 bg-white p-6 space-y-4 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
                  {/* Pricing Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-charcoal-muted font-sans">
                      <span>Subtotal</span>
                      <span className="font-semibold text-charcoal">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm text-charcoal-muted font-sans">
                      <span>Shipping</span>
                      <span className="font-medium text-forest">FREE</span>
                    </div>
                    <div className="border-t border-[#e4dfd5]/40 my-2 pt-2 flex justify-between items-baseline">
                      <span className="text-base font-bold text-charcoal font-sans">Total</span>
                      <span className="text-xl font-extrabold text-burgundy font-sans">₹{subtotal}</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-charcoal-muted text-center leading-relaxed">
                    Taxes and shipping computed at next step. Secure checkout.
                  </p>

                  <button
                    onClick={handleCheckout}
                    className="w-full flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-hover text-white py-4 rounded-full text-[15px] font-bold tracking-wide shadow-md shadow-burgundy/10 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
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
