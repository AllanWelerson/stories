import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html, body , #root{
    width: 100%;
    height: 100%;
    /* background-color: red; */
  }

  #root{
    position: absolute;
    background-color: #f5f6fa;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 10px;

`;