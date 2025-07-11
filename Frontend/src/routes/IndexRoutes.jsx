import React from 'react'
import Home from "../pages/Home";
import Men from "../pages/Mens";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Footer from '../pages/Footer';
import Navbar from '../pages/Navbar';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Wishlist from '../pages/Wishlist';
import Cart from "../pages/Cart"
import Profile from "../pages/Profile"
const IndexRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/mens-section" element={<Men/>}></Route>
      <Route path="/women-section" element={<Women/>}></Route>
      <Route path="/kids-section" element={<Kids/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default IndexRoutes
