import { loadStubs } from './stubs';
import { getUserFromJwt } from './user';
import { fetchCodeFromIdParam } from './code';
import { loadLanguages } from './languages';

export const initialize = function* (dispatch) {
  yield getUserFromJwt(dispatch);
  yield loadLanguages(dispatch);
  yield loadStubs(dispatch);
  yield fetchCodeFromIdParam(dispatch);
};
