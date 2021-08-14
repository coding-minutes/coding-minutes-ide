import React from 'react';
import { Provider } from 'react-redux';

import { MainView } from '~/views/main';
import { ProfileView } from '~/views/profile';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '~/initializers';
import { useTask } from 'react-use-task';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const [{}, perform] = useTask(initialize);

  React.useEffect(() => {
    perform(dispatch);
  }, []);

  return (
    <Switch>
      <Route path="/profile">
        <ProfileView />
      </Route>
      <MainView />
    </Switch>
  );
};
