// src/components/LoginModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative mx-4"
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
            onClick={onClose}
          >
            <X size={22} />
          </button>

          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Please log in first
          </h2>
          <p className="text-center text-gray-600 mb-6">
            You must be logged in to use this feature.
          </p>

          <div className="flex justify-center">
            <button
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition"
              onClick={() => navigate("/login")}
            >
              Go to Login
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginModal;
