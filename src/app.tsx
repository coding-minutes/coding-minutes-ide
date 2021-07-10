import React from 'react';
import { Provider } from 'react-redux';

import { MainView } from '~/views/main';
import { initStore } from '~/store';
import { BrowserRouter as Router } from 'react-router-dom';

const store = initStore();

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <MainView />
    </Router>
  </Provider>
);
