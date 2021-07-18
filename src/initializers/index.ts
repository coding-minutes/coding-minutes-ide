import { loadStubs } from './stubs';

export const initialize = function* (dispatch) {
  yield loadStubs(dispatch);
};
