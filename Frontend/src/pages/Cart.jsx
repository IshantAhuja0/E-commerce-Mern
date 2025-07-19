import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Heart, X, CreditCard, Lock } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Denim Jacket",
      category: "Men's",
      price: 89.99,
      quantity: 1,
      size: "L",
      color: "Blue",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Elegant Summer Dress",
      category: "Women's",
      price: 124.99,
      quantity: 2,
      size: "M",
      color: "Pink",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Cozy Knit Sweater",
      category: "Women's",
      price: 67.50,
      quantity: 1,
      size: "S",
      color: "Cream",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Kids Adventure Backpack",
      category: "Kids",
      price: 45.99,
      quantity: 1,
      size: "One Size",
      color: "Green",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Rainbow Sneakers",
      category: "Kids",
      price: 52.99,
      quantity: 1,
      size: "28",
      color: "Multi",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop"
    }
  ]);

  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleContinueShopping = () => {
    window.location.href = '/'; // Redirect to base URL
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const handleProceedToCheckout = () => {
    setShowPaymentPopup(true);
  };

  const PaymentPopup = () => {
    if (!showPaymentPopup) return null;

    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slideUp">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <CreditCard size={16} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Payment Details</h2>
              </div>
              <button 
                onClick={() => setShowPaymentPopup(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">Total Amount</span>
                <span className="text-2xl font-bold text-gray-900">${(getTotalPrice() * 1.08).toFixed(2)}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Lock size={14} />
                <span>Secure payment powered by Stripe</span>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Card Number</label>
                <input 
                  type="text" 
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Expiry Date</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">CVV</label>
                  <input 
                    type="text" 
                    placeholder="123"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Cardholder Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-gray-800 text-white py-4 rounded-xl font-semibold hover:bg-gray-500 transition-all duration-200 hover:scale-105 mb-3"
                >
                  Pay ${(getTotalPrice() * 1.08).toFixed(2)}
                </button>
                <button 
                  type="button"
                  onClick={() => setShowPaymentPopup(false)}
                  className="w-full border border-gray-300 text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const CartItem = ({ item }) => (
    <div className="group bg-white border border-gray-100 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-gray-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative overflow-hidden rounded-lg w-full sm:w-auto">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full sm:w-20 h-48 sm:h-20 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-gray-700 transition-colors duration-200">{item.name}</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-3">
                <span className="bg-gray-100 px-2 py-1 rounded-full">{item.category}</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">Size: {item.size}</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">Color: {item.color}</span>
              </div>
            </div>
            <div className="font-bold text-gray-900 text-xl sm:text-lg">${(item.price * item.quantity).toFixed(2)}</div>
          </div>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 hover:scale-110"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center font-medium text-gray-900">{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 hover:scale-110"
              >
                <Plus size={14} />
              </button>
            </div>
            <button 
              onClick={() => removeItem(item.id)}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 hover:scale-110"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleBackToHome}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
              >
                <ArrowLeft size={20} className="text-gray-900" />
              </button>
              <div className="flex items-center space-x-3">
                <ShoppingBag size={24} sm:size={28} className="text-gray-900" />
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Shopping Cart</h1>
                  <p className="text-sm text-gray-600">{getTotalItems()} items in your cart</p>
                </div>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110">
              <Heart size={20} className="text-gray-900" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some items to get started!</p>
            <button 
              onClick={handleContinueShopping}
              className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-500 transition-all duration-200 hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="xl:col-span-2">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Your Items</h2>
                <div className="h-px bg-gray-200"></div>
              </div>
              
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="animate-slideIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CartItem item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="xl:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Subtotal ({getTotalItems()} items)</span>
                      <span className="font-medium text-gray-900">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium text-gray-900">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg sm:text-xl font-bold text-gray-900">Total</span>
                        <span className="text-lg sm:text-xl font-bold text-gray-900">${(getTotalPrice() * 1.08).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleProceedToCheckout}
                    className="w-full bg-gray-800 text-white py-4 rounded-xl font-semibold hover:bg-gray-500 transition-all duration-200 hover:scale-105 mb-3"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <button 
                    onClick={handleContinueShopping}
                    className="w-full border border-gray-300 text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Payment Popup */}
      <PaymentPopup />

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Cart;