import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot

root.render(
  <Auth0Provider
    domain="dev-p8ws0p64pssk3h24.us.auth0.com"
    clientId="QsXTdIgOdvPz2zf1B9peixxnndXv9XEz"
    authorizationParams={{
      redirect_uri: window.location.origin + '/profile'
    }}  
  >
  <App />
  </Auth0Provider>
);