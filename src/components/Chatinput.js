import React, { useState } from 'react';
import { ChatinputContainer } from './Chatinput.styles';
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase';

function Chatinput({ channelName, channelId }) {
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
        'https://www.google.com/imgres?imgurl=http%3A%2F%2Fassets.stickpng.com%2Fimages%2F5cb480cd5f1b6d3fbadece79.png&imgrefurl=https%3A%2F%2Fwww.stickpng.com%2Fimg%2Ficons-logos-emojis%2Ftech-companies%2Fslack-new-logo-icon&tbnid=-bX6hs6z8S09rM&vet=12ahUKEwjl_YvlraXvAhWDvSoKHZJjAOwQMygAegUIARCdAQ..i&docid=YY_hB-7elAX7UM&w=1600&h=1600&q=slack&hl=en&ved=2ahUKEwjl_YvlraXvAhWDvSoKHZJjAOwQMygAegUIARCdAQ',
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
