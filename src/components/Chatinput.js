import React from 'react';
import { ChatinputContainer } from './Chatinput.styles';
import { Button } from '@material-ui/core';

function Chatinput() {
  return (
    <ChatinputContainer>
      <form>
        <input placeholder={`Message #ROOM`} />
        <Button hidden type="submit">
          SEND
        </Button>
      </form>
    </ChatinputContainer>
  );
}

export default Chatinput;
