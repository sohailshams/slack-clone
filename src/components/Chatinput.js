import React, { useState } from 'react';
import { ChatinputContainer } from './Chatinput.styles';
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase';

function Chatinput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    // Prevents refresh
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Sohial Shams',
      userImage:
        'https://www.howtogeek.com/wp-content/uploads/2019/06/slack_logo.png?height=200p&trim=2,2,2,2',
    });

    chatRef.current.scrollIntoView({
      behavior: 'smooth',
    });

    setInput('');
  };

  return (
    <ChatinputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
          type="text"
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatinputContainer>
  );
}

export default Chatinput;
