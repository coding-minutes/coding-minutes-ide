import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { editorReducer } from '~/store/reducers/editor';

export const initStore = () => {
  const rootReducer = combineReducers({
    editor: editorReducer,
  });
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(rootReducer, composeEnhancers());

  return store;
};
