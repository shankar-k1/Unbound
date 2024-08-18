import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./loginlogout.css";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

};

export default Login;