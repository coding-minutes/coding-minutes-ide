import React from 'react';
import { useDispatch } from 'react-redux';
import { BaseModal } from '~/components/base/modal';
import { LOGIN_MODAL } from '~/constants/modal';
import { loginUser } from '~/store/action/auth';
import { GoogleLogin } from 'react-google-login';
import Config from '~/config';
import { loginWithToken } from '~/services/auth';
import { setActiveModal } from '~/store/action/ui';
import { setJwt } from '~/utils/jwt';

export const LoginModal: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const loginGoogleSuccess = async (response) => {
    try {
      setLoading(true);
      const token = response.getAuthResponse().id_token;
      console.log(token);
      const res = await loginWithToken(token);
      const { jwt } = res;

      const basicProfile = response.getBasicProfile();
      const user = {
        email: basicProfile.getEmail(),
        first_name: basicProfile.getGivenName(),
        last_name: basicProfile.getFamilyName(),
      };

      dispatch(
        loginUser({
          user,
          jwt,
          isLoggedIn: true,
        }),
      );
      dispatch(setActiveModal(null));
      setJwt(jwt);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loginFailure = (e) => {
    e?.preventDefault?.();
    console.error('Failure = ', e);
  };

  return (
    <BaseModal name={LOGIN_MODAL} className="">
      <div className="overlay__modal__title mb-3">Welcome to</div>
      <img
        src="https://minio.codingminutes.com/assets/cm-logo-oneline.svg"
        alt="Coding Minutes Logo"
        style={{ height: '20px' }}
      />
      <div className="overlay__modal__divider"></div>
      <div className="overlay__modal__title mb-4">Login to your account</div>
      {loading && <p style={{ height: '20px' }}>Loading...</p>}
      {!loading && (
        <div className="login-card login-card--google mb-4">
          <GoogleLogin
            clientId={Config.GOOGLE_CLIENT_ID}
            onSuccess={loginGoogleSuccess}
            onFailure={loginFailure}
            render={(renderProps) => (
              <div className="row no-gutters align-items-center" onClick={renderProps.onClick}>
                <img src="https://minio.codingminutes.com/assets/google-logo.svg" alt="Google" />
                <div className="flex-1">Continue with Google</div>
              </div>
            )}
          />
        </div>
      )}
    </BaseModal>
  );
};
