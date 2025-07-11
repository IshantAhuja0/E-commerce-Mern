
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import React from "react";
import IndexRoutes from "./routes/IndexRoutes";
const App = () => {
  const handleGoogleLogin = () => {
    window.open("http://localhost:3000/api/users/google", "_self");
  };

  return (
    <div>
      <IndexRoutes/>
    </div>
  )
};

export default App;

