import React from 'react';
import './Header.styles';
import {
  HeaderAvatar,
  HeaderContainer,
  HeaderLeft,
  HeaderSearch,
} from './Header.styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderSearch>
    </HeaderContainer>
  );
}

export default Header;
