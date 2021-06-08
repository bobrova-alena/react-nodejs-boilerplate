import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router } from './routes';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router></Router>
  </Provider>,
  document.getElementById('root')
);
