import React from 'react';
import { useGoogleLogin } from 'react-google-login';

import refreshTokenSetup from '../../utils/refreshTokenSetup';
import { CLIENT_ID as clientId } from '../../config';

function Login() {
  const onSuccess = (res: any) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍.`,
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
    alert(
      'Failed to login. 😢 Please ping try again.',
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <button type="submit" onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon" />

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export default Login;
