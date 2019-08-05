import React from 'react';

import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Main from './Main';

import theme from './theme';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
