import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

export const MessageInfo = styled.div`
  padding-left: 15px;

  > h4 > span {
    color: grey;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
