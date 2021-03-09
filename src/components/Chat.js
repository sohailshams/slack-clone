import React from 'react';
import {
  ChatContainer,
  ChatMessages,
  Header,
  HeaderLeft,
  HeaderRight,
} from './Chat.styles';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Chatinput from './Chatinput';

function Chat() {
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#Room-name</strong>
              <StarBorderOutlinedIcon />
            </h4>
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlinedIcon />
              Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages>{/* List out the messages */}</ChatMessages>
        <Chatinput />
      </>
    </ChatContainer>
  );
}

export default Chat;
