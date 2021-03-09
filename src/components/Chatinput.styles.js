import styled from 'styled-components';

export const ChatinputContainer = styled.div`
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border-radius: 3px;
    border: 1px solid grey;
    outline: none;
    padding: 20px;
  }

  > form > button {
    display: none !important;
  }
`;
