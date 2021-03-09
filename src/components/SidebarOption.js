import React from 'react';
import { db } from '../firebase';
import {
  SidebarOptionChennel,
  SidebarOptionContainer,
} from './SidebarOption.styles';

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const addChennel = () => {
    const chennelName = prompt('Please enter the chennel name');

    // If statement to protect against if user try to add empty string
    if (chennelName) {
      db.collection('rooms').add({
        name: chennelName,
      });
    }
  };
  const selectChennel = () => {};
  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChennel : selectChennel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChennel>
          <span>#</span> {title}
        </SidebarOptionChennel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;
