import React from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Home.jsx";
const App = () => {
  const handleGoogleLogin = () => {
    window.open("http://localhost:3000/api/users/google", "_self");
  };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
    //   <div className="p-6 bg-white rounded shadow-lg text-center">
    //     <h1 className="text-2xl font-bold mb-4">Login with Google</h1>
    //     <button
    //       onClick={handleGoogleLogin}
    //       className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    //     >
    //       Sign in with Google
    //     </button>
    //   </div>
    // </div>
    <>
    <Home/>
    </>
  );
};

export default App;