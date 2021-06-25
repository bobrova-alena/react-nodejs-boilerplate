import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { theme } from 'src/theme';
import { ThemeProvider } from 'styled-components';

import { Router } from './routes';
import { store } from './state';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router></Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
