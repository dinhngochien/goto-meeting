import React from 'react';
import { useGoogleLogout } from 'react-google-login';

import { CLIENT_ID as clientId } from '../../config';

function Logout() {
  const onLogoutSuccess = () => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
    localStorage.removeItem('authToken');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button type="submit" onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon" />

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default Logout;
