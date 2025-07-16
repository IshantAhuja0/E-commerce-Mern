import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const LoginPopup = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          className="relative bg-white max-w-md w-full mx-4 p-8 rounded-2xl shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-black transition"
          >
            <X size={22} />
          </button>

          {/* Modal Content */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">You're not logged in</h2>
            <p className="text-gray-600 mb-6">
              Please log in to add items to your wishlist or continue shopping.
            </p>
            <a
              href="/login"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Go to Login
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginPopup;
