import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { editorReducer } from '~/store/reducers/editor';
import { uiReducer } from '~/store/reducers/ui';

export const initStore = () => {
  const rootReducer = combineReducers({
    editor: editorReducer,
    ui: uiReducer,
  });
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(rootReducer, composeEnhancers());

  return store;
};
