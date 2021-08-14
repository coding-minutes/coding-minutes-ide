import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '~/app';
import '~/style/app.scss';
import { initStore } from '~/store';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
const store = initStore();
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
