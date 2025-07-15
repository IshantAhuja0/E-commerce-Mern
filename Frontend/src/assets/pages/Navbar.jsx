import { useState } from "react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import React from "react";
import Home from "./Home"; // Assuming Home is a component you want to render
export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 font-sans">
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide">
          AURENZA
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-black transition duration-200">ALL</a>
          <a href="#" className="hover:text-black transition duration-200">Women</a>
          <a href="#" className="hover:text-black transition duration-200">Men</a>
          <a href="#" className="hover:text-black transition duration-200">Kids</a>
        </div>

        {/* Icons + Search */}
        <div className="flex items-center gap-4 text-gray-700 text-lg relative">
          {/* Toggle search on small screens */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="md:hidden hover:text-pink-500 transition"
          >
            <FaSearch />
          </button>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
            />
          </div>

          <FaHeart className="hover:text-pink-500 cursor-pointer transition" />
          <FaShoppingCart className="hover:text-pink-500 cursor-pointer transition" />
        </div>
      </div>

      {/* Mobile Nav Links */}
      <div className="md:hidden px-4 pb-3 flex justify-around text-sm font-medium text-gray-700 border-t border-gray-100">
        <a href="#" className="hover:text-black transition">ALL</a>
        <a href="#" className="hover:text-black transition">Women</a>
        <a href="#" className="hover:text-black transition">Men</a>
        <a href="#" className="hover:text-black transition">Kids</a>
      </div>

      {/* Mobile Search Bar (toggle) */}
      {showSearch && (
        <div className="md:hidden px-4 pb-3 animate-fade-in-down">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
          />
        </div>
      )}
      <Home />
    </div>
    
  );
}
