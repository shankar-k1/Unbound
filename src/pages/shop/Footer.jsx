import React from 'react';
import './footer.css'; // Import footer styles

export const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Freedom Shopping. All rights reserved.</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> | 
        <a href="/terms-of-service"> Terms of Service</a>
      </p>
    </footer>
  );
};