import { loadStubs } from './stubs';

export const initalize = function* (dispatch) {
  yield loadStubs(dispatch);
};
