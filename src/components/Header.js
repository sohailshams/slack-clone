import React from 'react';
import './Header.styles';
import { HeaderAvatar, HeaderContainer, HeaderLeft } from './Header.styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>
    </HeaderContainer>
  );
}

export default Header;
