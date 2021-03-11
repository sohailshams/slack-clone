import React from 'react';
import { LoginContainer, LoginInnerContainer } from './Login.styles';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

function Login() {
  const signIn = (e) => {
    // Prevent default refresh
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="slack logo"
        />
        <h2>Sign in to the Slack-Clone</h2>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
