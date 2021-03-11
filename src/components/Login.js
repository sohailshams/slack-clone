import React from 'react';
import { LoginContainer, LoginInnerContainer } from './Login.styles';
import { Button } from '@material-ui/core';

function Login() {
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="slack image"
        />
        <h2>Sign in to the Slack-Clone</h2>
        <Button>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
