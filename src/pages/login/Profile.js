import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import "./loginlogout.css";
import Button from '@mui/material/Button';
const Profile = () => {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  if (isLoading) {
    return (
    <div>Loading...</div>
  )};

  return (
    <div>
      {isAuthenticated && (
        <div className='profile'>
          <h2>Profile Details</h2>
          {/* <img src={user.picture} alt={user.name} />  */}
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <div className='logout'>
            <Button variant="contained" onClick={() => logout({ returnTo: window.location.origin + '/'})}>Log Out</Button>
              <Button variant="contained" onClick={() => navigate("/shop")}> Go to home </Button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Profile;