import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosHeart } from "react-icons/io";
import LoginModal from './LoginModal'; // ✅ Import modal

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); 

  const navigate = useNavigate();

  const handleProtectedClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowLoginModal(true); 
    } else {
      alert("Allowed (User logged in)");
    }
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 rounded-b-lg">
      <div className="text-2xl font-bold text-gray-900">
        <Link to="/">Aura Threads</Link>
      </div>

      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <Link to="/" className="text-lg font-medium hover:text-indigo-500">Featured</Link>
          <Link to="/mens-section" className="text-lg font-medium hover:text-indigo-500">Men</Link>
          <Link to="/women-section" className="text-lg font-medium hover:text-indigo-500">Women</Link>
          <Link to="/kids-section" className="text-lg font-medium hover:text-indigo-500">Kids</Link>
          <Link to="/about" className="text-lg font-medium hover:text-indigo-500">About</Link>
        </ul>
      </nav>

      <div className="hidden lg:block">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="md:hidden p-2">🔍</button>

        {/* ❤️ Wishlist */}
        <Link to="/wishlist" className="text-2xl" onClick={handleProtectedClick}>
          <IoIosHeart />
        </Link>

        {/* 🛒 Cart */}
        <Link to="/cart" className="relative text-2xl" onClick={handleProtectedClick}>
          <FiShoppingCart />
          <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full h-4 w-4 flex justify-center items-center">0</span>
        </Link>

        {/* 👤 Account */}
        <Link to="/profile" className="text-2xl"><FaUserAlt /></Link>

        {/* ☰ Mobile Menu */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md md:hidden">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-900">New Arrivals</Link></li>
            <li><Link to="/women-section" className="text-gray-600 hover:text-gray-900">Women</Link></li>
            <li><Link to="/mens-section" className="text-gray-600 hover:text-gray-900">Men</Link></li>
            <li><Link to="/kids-section" className="text-gray-600 hover:text-gray-900">Kids</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
          </ul>
        </div>
      )}

      {/* ✅ Show Modal if user not logged in */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </header>
  );
};

export default Navbar;
