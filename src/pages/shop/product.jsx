import React , { useContext }from 'react';
import Button from '@mui/material/Button';
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {

  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
 
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <div className="main">
      <Button variant="contained" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </Button>

    </div>
      </div>
  );
};