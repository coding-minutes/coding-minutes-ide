import React from 'react';
import { Provider } from 'react-redux';

import { MainView } from '~/views/main';
import { ProfileView } from '~/views/profile';
import { initStore } from '~/store';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const store = initStore();

export const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/profile">
          <ProfileView />
        </Route>
        <MainView />
      </Switch>
    </Router>
  </Provider>
);
