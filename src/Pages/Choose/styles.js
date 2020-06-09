import styled from 'styled-components';

export const Container = styled.div``;

export const HeaderDiv = styled.header`
  background-color: blue;
  height: 10vh;
`;

export const FooterDiv = styled.footer`
  background-color: blue;
  height: 10vh;
`;

export const MainDiv = styled.main`
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
`;

export const Option_Button = styled.button`
  background-color: purple;
  height: 10vh;
  width: 30vw;
  &:nth-child(2) {
    background-color: green;
  }
`;