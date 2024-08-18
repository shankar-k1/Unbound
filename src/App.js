import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Contact } from "./pages/Contact/contact";
import { Details } from "./pages/details/details";
import { ShopContextProvider } from "./context/shop-context";
import Login from './pages/login/LoginButton';
import {Checkout} from "./pages/cart/checkout";
// import LogoutButton  from './pages/login/LogoutButton';
import Profile  from './pages/login/Profile';
import React from "react";

const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />}   />
            <Route path="/" element={<Login />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail" element={<Details />} /> 
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider> 
    </div>
    
  );
};

export default App;
