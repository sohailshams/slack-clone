import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
    @media (max-width: 375px) {
      height: 20px !important;
    }
  }
`;

export const MessageInfo = styled.div`
  padding-left: 15px;

  > h4 {
    @media (max-width: 375px) {
      font-size: 12px !important;
    }
  }

  > h4 > span {
    color: grey;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
    @media (max-width: 375px) {
      font-size: 8px !important;
    }
  }
`;
