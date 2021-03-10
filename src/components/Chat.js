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
import { selectRoomId } from '../features/appSlice';
import { useSelector } from 'react-redux';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );
  const [roomMessages] = useCollection(
    roomId &&
      db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  );

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
        <Chatinput channelId={roomId} />
      </>
    </ChatContainer>
  );
}

export default Chat;
