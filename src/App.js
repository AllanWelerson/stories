import React from 'react';

import { GlobalStyle } from './styles';

import StoriesProvider from './contexts/StoriesContext';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <StoriesProvider>
        <Routes />
      </StoriesProvider>
    </>
  );
}

export default App;
