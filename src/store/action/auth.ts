import { LOGIN, LOGOUT } from '../action-types/auth';
import { AuthState } from '../reducers/auth';

export const loginUser = (auth: AuthState) => ({
  type: LOGIN,
  payload: auth,
});

export const logoutUser = () => ({
  type: LOGOUT,
  payload: null,
});
