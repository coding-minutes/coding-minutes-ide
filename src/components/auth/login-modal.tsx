import React from 'react';
import { useDispatch } from 'react-redux';
import { BaseModal } from '~/components/base/modal';
import { LOGIN_MODAL } from '~/constants/modal';
import { loginUser } from '~/store/action/auth';
import { GoogleLogin } from 'react-google-login';
import Config from '~/config';
import AuthClient from '~/services/auth_api';
import { setActiveModal } from '~/store/action/ui';

export const LoginModal: React.FC = () => {
  const dispatch = useDispatch();

  const loginGoogleSuccess = async (response) => {
    try {
      const token = response.getAuthResponse().id_token;
      const res = await AuthClient.post('/login', {
        token,
      });
      const { jwt } = res.data;

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
    } catch (error) {
      console.error(error);
    }
  };

  const loginFailure = (e) => {
    e?.preventDefault?.();
    console.error('Failure = ', e);
  };

  return (
    <BaseModal name={LOGIN_MODAL}>
      <div className="overlay__modal__title mb-3">Welcome to</div>
      <img
        src="https://minio.codingminutes.com/assets/cm-logo-oneline.svg"
        alt="Coding Minutes Logo"
        style={{ height: '20px' }}
      />
      <div className="overlay__modal__divider"></div>
      <div className="overlay__modal__title mb-4">Login to your account</div>
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
    </BaseModal>
  );
};
