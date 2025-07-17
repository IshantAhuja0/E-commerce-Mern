import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log("Token from response:", res.data.token);
      if (res.data.token) localStorage.setItem("token", res.data.token);

      alert("user logged in successfully!");
      navigate("/");
    } catch (err) {
      console.log("error Occured while logging in ", err);
    }
  };
  const handleGoogleLogin = () => {
    window.open("http://localhost:3000/api/users/google", "_self");
  };
  return (
    // Changed background to a cooler grey to match the new palette
    <div className="min-h-screen flex items-center justify-center bg-slate-200 font-sans p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 lg:p-12 space-y-8 bg-white rounded-2xl shadow-2xl"
      >
        <div className="text-center">
          {/* Heading now uses our custom 'midnight' color */}
          <h1 className="text-4xl font-serif font-bold text-midnight">
            Welcome Back
          </h1>
          {/* Sub-heading uses a soft grey for contrast */}
          <p className="mt-2 text-slate-500 ">
            Sign in to access your curated styles.
          </p>
        </div>

        {/* Continue with Google Button */}
        <motion.button
          onClick={handleGoogleLogin}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center py-3 px-4 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
        >
          <FcGoogle className="w-6 h-6 mr-3" />
          Continue with Google
        </motion.button>

        {/* Separator */}
        <div className="flex items-center justify-center">
          <hr className="w-full border-slate-300" />
          <span className="px-4 text-slate-500 text-sm">OR</span>
          <hr className="w-full border-slate-300" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-600"
            >
              Email Address
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // Updated input fields to match the cooler grey palette
              className="w-full px-4 py-3 font-medium bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-midnight/50 transition"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-600"
              >
                Password
              </label>
              {/* Updated link color to use the main accent color on hover */}
              <a
                href="#"
                className="text-sm text-slate-500 hover:text-midnight"
              >
                Forgot password?
              </a>
            </div>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 font-2xl  medium bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-midnight/50 transition"
              placeholder="••••••••"
            />
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02, y: -2, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              // The main button now uses our beautiful 'midnight' blue
              className="w-full py-3 px-4 bg-midnight text-grey-500 font-bold  bg-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-midnight transition-all"
            >
              Sign In
            </motion.button>
          </div>
        </form>

        <p className="text-center text- xl text-slate-500 font-medium">
          Don't have an account? {/* Sign up link also uses the accent color */}
          <Link
            to="/register"
            className="font-medium text-midnight hover:underline"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
