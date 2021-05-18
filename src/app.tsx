import React from 'react';
import { Provider } from 'react-redux';
import { MainView } from '~/views/main';

import { initStore } from '~/store';

const store = initStore();

export const App: React.FC = () => (
  <Provider store={store}>
    <MainView />
  </Provider>
);
