import React from 'react';
import { ChatinputContainer } from './Chatinput.styles';
import { Button } from '@material-ui/core';

function Chatinput() {
  const sendMessage = (e) => {
    // Prevents refresh
    e.preventDefault();
  };
  return (
    <ChatinputContainer>
      <form>
        <input placeholder={`Message #ROOM`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatinputContainer>
  );
}

export default Chatinput;
