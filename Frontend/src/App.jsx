
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/" element={<Home/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
