import React from 'react';
import { useDispatch, batch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import OauthPopup from 'react-oauth-popup';
import jwt_decode from "jwt-decode"
import { LOGIN_MODAL } from '~/constants/modal';
import { loginUser } from '~/store/action/auth';
import { BaseModal } from '~/components/base/modal';
import Config from '~/config';
import { loginWithToken, githubLoginWithCode } from '~/services/auth';
import { setActiveModal } from '~/store/action/ui';
import { setJwt } from '~/utils/jwt';

export const LoginModal: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const loginGoogleSuccess = async (response) => {
    try {
      setLoading(true);
      const token = response.getAuthResponse().id_token;
      const res = await loginWithToken(token);
      const { jwt } = res;

      const basicProfile = response.getBasicProfile();
      const user = {
        email: basicProfile.getEmail(),
        first_name: basicProfile.getGivenName(),
        last_name: basicProfile.getFamilyName(),
      };

      batch(() => {
        dispatch(
          loginUser({
            user,
            jwt,
            isLoggedIn: true,
          }),
        );
        dispatch(setActiveModal(null));
      });
      setJwt(jwt);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loginGithubSuccess = async (code, params) => {
    try {
      setLoading(true);
      const res = await githubLoginWithCode(code);
      const { jwt } = res;
      const decoded :any = jwt_decode(jwt);

      const user = {
        email: decoded.email,
        first_name: decoded.first_name,
        last_name: decoded.last_name,
      };

      batch(() => {
        dispatch(
          loginUser({
            user,
            jwt,
            isLoggedIn: true,
          }),
        );
        dispatch(setActiveModal(null));  
      });
      setJwt(jwt);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const loginFailure = (e) => {
    e?.preventDefault?.();
    console.error('Failure = ', e);
  };

  function getGithubOAuthURL() {
    const GITHUB_CLIENT_ID = Config.GITHUB_CLIENT_ID;
    const scopes = "read:user+user:email";
    const redirect_uri = window.location.href;
    const url = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=${scopes}&redirect_uri=${redirect_uri}`;
    return url;
  }

  return (
    <BaseModal name={LOGIN_MODAL} style="">
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
        <>
          <div className="login-card login-card--google mb-4">
            <GoogleLogin
              clientId={Config.GOOGLE_CLIENT_ID}
              onSuccess={loginGoogleSuccess}
              onFailure={loginFailure}
              render={(renderProps: { onClick: React.MouseEventHandler<HTMLDivElement>; }) => (
                <div className="row no-gutters align-items-center" onClick={renderProps.onClick}>
                  <img src="https://minio.codingminutes.com/assets/google-logo.svg" alt="Google" />
                  <div className="flex-1">Continue with Google</div>
                </div>
              )}
            />
          </div>
          <OauthPopup
            url={getGithubOAuthURL()}
            onCode={loginGithubSuccess}
            onClose={() => {}}
            title="Github OAuth"
            width={800}
            height={700}
          >
            <div className="login-card login-card--github mb-4">
              <div className="row no-gutters align-items-center">
                <img src="https://minio.codingminutes.com/assets/github-logo.svg" alt="Github" />
                <div className="flex-1">Continue with Github</div>
              </div>
            </div>
          </OauthPopup>
        </>
      )}
    </BaseModal>
  );
};
