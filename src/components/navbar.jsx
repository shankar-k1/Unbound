import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Phone, Database } from 'phosphor-react';
import "./navbar.css";
import logo from '../assets/logo.jpg';
import ThemeToggler from "./Themetoggler";

export const Navbar = () => {
    return (
    <div className="navbar">
        <div class="logo">
            <img src={logo} alt="logo"/>
        </div>
        <div className="links">
            <Link to="/Profile">Profile</Link>
            <Link to="/shop">Shop  </Link>
            <Link to="/cart"> 
            <ShoppingCart size={32}
            alt="Cart"/>
            </Link>
            <br/>
            <Link to="/contact">
            <Phone size={32}
            alt="Contact"/>
            </Link>

            <Link to="/detail">
            <Database size={32}
            alt="Inventory"/>
            </Link>
            
            <ThemeToggler />

        </div>
    </div>
    );
};

export default Navbar;