// src/RegisterPage.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
// Assuming you're using React Router for navigation
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const { confirmPassword, ...dataToSubmit } = formData;
    console.log('Registering with:', dataToSubmit);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 font-sans p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl p-8 lg:p-8 space-y-6 bg-white rounded-2xl shadow-2xl"
      >
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-midnight">
            Create Your Account
          </h1>
          <p className="mt-2 text-slate-500">
            Join us and discover exclusive fashion.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center py-3 px-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
        >
          <FcGoogle className="w-6 h-6 mr-3" />
          Sign up with Google
        </motion.button>

        <div className="flex items-center justify-center">
          <hr className="w-full border-slate-300" />
          <span className="px-4 text-slate-500 text-sm">OR</span>
          <hr className="w-full border-slate-300" />
        </div>

        {/* --- CHANGE STARTS HERE --- */}

        {/* 1. We wrap the form and the "Sign in" link in a new div */}
        <div>
          {/* 2. We can keep the form's internal spacing */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-600">
                Full Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id="name" name="name" type="text"
                required
                value={formData.name} onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-midnight/50 transition"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-600">
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id="email" name="email" type="email"
                required
                value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-midnight/50 transition"
                placeholder="you@example.com"
              />
            </div>

            {/* Mobile Number Field */}
            <div className="space-y-2">
              <label htmlFor="mobileNumber" className="text-sm font-medium text-slate-600">
                Mobile Number
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id="mobileNumber" name="mobileNumber" type="tel"
                required
                value={formData.mobileNumber} onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-midnight/50 transition"
                placeholder="123-456-7890"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-600">
                Password
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id="password" name="password" type="password"
                required
                value={formData.password} onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-midnight/50 transition"
                placeholder="••••••••"
              />
            </div>

           {/* Confirm Password Field */}
<div className="space-y-2 mb-2">
  <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-600">
    Confirm Password
  </label>
  <motion.input
    whileFocus={{ scale: 1.02 }}
    id="confirmPassword" name="confirmPassword" type="password"
    required
    value={formData.confirmPassword} onChange={handleChange}
    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-midnight/50 transition"
    placeholder="••••••••"
  />
</div>

<div>
  <motion.button
    whileHover={{ scale: 1.02, y: -2, filter: "brightness(1.1)" }}
    whileTap={{ scale: 0.98 }}
    type="submit"
    className="w-full py-3 px-2 bg-midnight text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-midnight transition-all"
  >
    Create Account
  </motion.button>
</div>

<p className=" text-center text-sm font-medium text-slate-500">
  Already have an account?{" "}
  <Link to="/login" className="font-bold text-midnight hover:underline">
    Sign in
  </Link>
</p>
          </form>
        </div>
        
      </motion.div>
    </div>
  );
};

export default Register;