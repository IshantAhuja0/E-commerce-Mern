import React from 'react'

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 rounded-t-lg mt-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Aura Threads
          </h4>
          <p className="text-sm">
            Crafting timeless elegance and modern luxury for the discerning
            individual. Quality and style, redefined.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Shop All
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Sale
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Customer Service
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Size Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Stay Connected
          </h4>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for exclusive updates and offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded-l-md bg-gray-700 border border-gray-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-5 rounded-r-md transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Aura Threads. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer
