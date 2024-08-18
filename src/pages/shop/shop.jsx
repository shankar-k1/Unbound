import React from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Footer } from "./Footer";// Import the Footer component
import ThemeToggler from "../../components/Themetoggler"; // Import the Footer component

export const Shop = () => {
  return (
    <div className="shop">
      <div className='shoptitle'>
        <h4>Welcome to Freedom Shopping</h4>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};