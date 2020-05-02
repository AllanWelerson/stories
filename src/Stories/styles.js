import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2f3640;
  }
`;

export const Container = styled.div`
  background-color: #2f3640;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
