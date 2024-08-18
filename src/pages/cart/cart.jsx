import React , { useContext, useState }from 'react';
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products";
import "./cart.css";
import Button from '@mui/material/Button';
import { CartItem } from "./cart-item";
import { ShopContext } from "../../context/shop-context";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal :      ${totalAmount} </p>
          <Button variant="contained" onClick={() => navigate("/")}> Continue Shopping </Button>
          <Button 
            variant="contained" 
            onClick={async () => {
              setIsCheckingOut(true);
              await checkout();
              navigate("/checkout");
              setIsCheckingOut(false);
            }}
            disabled={isCheckingOut}
          >
            {isCheckingOut ? "Processing..." : "Checkout"}
          </Button>
        </div>
      ) : (
        <h1 className="empty-cart-message">Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};