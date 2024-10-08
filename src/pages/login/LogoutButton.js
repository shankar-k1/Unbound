import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className='oflogout'>
      <Button variant="contained" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
    </div>
  );
};

export default LogoutButton;