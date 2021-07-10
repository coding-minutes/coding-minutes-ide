import { LOGIN, LOGOUT } from '../action-types/auth';

interface UserType {
  email: string;
  first_name: string;
  last_name: string;
}

export interface AuthState {
  user: UserType | null;
  jwt: string;
  isLoggedIn: boolean;
}

const initialState = {
  user: null,
  jwt: '',
  isLoggedIn: false,
};

export const authReducer = (state: AuthState = initialState, action): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        jwt: action.payload.jwt,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        jwt: '',
      };
    default:
      return state;
  }
};
