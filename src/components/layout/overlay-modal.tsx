import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalOverlay } from '~/store/action/ui';
import { loginUser } from '~/store/action/auth';
import { GoogleLogin } from 'react-google-login';
import Config from '~/config';
import AuthClient from '~/services/auth_api';

export interface ModalOverlayProps {
  className: string;
}

export const OverlayModal: React.FC<ModalOverlayProps> = (props) => {
  const dispatch = useDispatch();

  const { className } = props;
  const toggleOverlay = (e) => {
    dispatch(toggleModalOverlay());
  };

  const loginGoogleSuccess = async (response) => {
    toggleOverlay({});

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
    } catch (error) {
      console.error(error);
      alert('Could not login. Please try again');
    }
  };

  const loginFailure = (e) => {
    console.error('Login Failure = ', e);
  };

  return (
    <>
      <div className={`overlay ${className}`} onKeyDown={toggleOverlay}>
        <div className="overlay__modal">
          <div className="w-100">
            <div className="overlay__modal__title mb-3">Welcome to</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cm-oneline.svg"
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
                    <img
                      src="https://minio.codingminutes.com/assets/google-logo.svg"
                      alt="Google"
                    />
                    <div className="flex-1">Continue with Google</div>
                  </div>
                )}
              />
            </div>
            <div className="login-card login-card--github mb-4">
              <div className="row no-gutters align-items-center">
                <img src="https://minio.codingminutes.com/assets/github-logo.svg" alt="Github" />
                <div className="flex-1">Continue with Github</div>
              </div>
            </div>
            <div className="login-card login-card--linkedin">
              <div className="row no-gutters align-items-center">
                <img
                  src="https://minio.codingminutes.com/assets/linkedin-logo.svg"
                  alt="Linkedin"
                />
                <div className="flex-1">Continue with Linkedin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
