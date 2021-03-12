import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--slack-color);
  padding: 10px 0;
  color: #fafafa;
`;

export const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    @media (max-width: 425px) {
      margin-left: 10px !important;
    }
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  background-color: #421f44;
  display: flex;
  padding: 0 50px;
  border: 1px gray solid;
  @media (max-width: 425px) {
    min-width: 20px !important;
  }

  > input {
    background-color: transparent;
    outline: 0;
    border: none;
    text-align: center;
    color: #fafafa;
    min-width: 30vw;
    @media (max-width: 320px) {
      min-width: 15vw !important;
    }
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
    @media (max-width: 320px) {
      margin-left: 10px !important;
    }
  }
`;
