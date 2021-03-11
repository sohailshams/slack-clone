import React from 'react';
import { MessageContainer, MessageInfo } from './Message.styles';

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="user image" />
      <MessageInfo>
        {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;
