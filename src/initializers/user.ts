import { verifyToken } from '~/services/auth';
import { clearJwt, getJwt } from '~/utils/jwt';
import { Dispatch } from 'redux';
import { loginUser } from '~/store/action/auth';

export async function getUserFromJwt(dispatch: Dispatch) {
  try {
    const jwt = getJwt();
    if (!jwt) return;

    const response = await verifyToken();
    const user = response.data;

    dispatch(
      loginUser({
        user,
        jwt,
        isLoggedIn: true,
      }),
    );
  } catch (error) {
    console.error(error);
    clearJwt();
  }
}
