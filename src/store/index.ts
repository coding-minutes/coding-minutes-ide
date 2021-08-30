import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { editorReducer } from '~/store/reducers/editor';
import { uiReducer } from '~/store/reducers/ui';
import { authReducer } from '~/store/reducers/auth';
import { savelistReducer } from '~/store/reducers/savelist';

export const initStore = () => {
  const rootReducer = combineReducers({
    editor: editorReducer,
    ui: uiReducer,
    auth: authReducer,
    savelist: savelistReducer,
  });
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(rootReducer, composeEnhancers());

  return store;
};
