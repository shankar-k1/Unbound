import React from 'react';
import Button from '@mui/material/Button';
import './checkout.css';

export const Checkout = () => {
  return (
    <div className="checkout">
      <p>Checkout Complete</p>
        <Button type="submit" variant="contained">Confirm Order</Button>
    </div>
  );
};