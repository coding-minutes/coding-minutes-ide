import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LanguagePicker } from '~/components/editor/language-picker';
import { getIsLoggedIn } from '~/store/getters/auth';
import { logoutUser } from '~/store/action/auth';
import { setActiveModal } from '~/store/action/ui';
import { LOGIN_MODAL } from '~/constants/modal';
import { getCurrentSource, getStdin, getSelectedLanguage } from '~/store/getters/editor';
import { clearJwt } from '~/utils/jwt';
import { saveUpdateCode } from '~/tasks/save-update-code';

export const Navbar: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const toggleOverlay = () => dispatch(setActiveModal(LOGIN_MODAL));
  const isLoggedIn = useSelector(getIsLoggedIn());
  const currentLanguage = useSelector(getSelectedLanguage());
  const data = {
    lang: currentLanguage?.id || -1,
    source: useSelector(getCurrentSource()),
    input: useSelector(getStdin()),
  };

  const history = useHistory();

  const logout = () => {
    dispatch(logoutUser());
    clearJwt();
  };

  async function saveCode() {
    if (!isLoggedIn) {
      return toggleOverlay();
    }
    setLoading(true);
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    try {
      const response = await saveUpdateCode(data, id);
      if (id != response?.id) {
        return history.push(`/?id=${response.id}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function copyCode() {
    const sourceCode = data.source;
    navigator.clipboard.writeText(sourceCode);
  }

  return (
    <div className="navbar-top">
      <div className="h-inherit">
        <div className="row no-gutters align-items-center justify-content-between py-2 px-5 h-inherit">
          <div className="row no-gutters align-items-center">
            <a href="https://codingminutes.com/" target="_blank" className="mr-5">
              <img
                src="https://minio.codingminutes.com/assets/cm-logo-oneline.svg"
                alt="Coding Minutes Logo"
                style={{ height: '20px' }}
              />
            </a>

            <button
              className="navbar-top__option"
              onClick={saveCode}
              disabled={loading}
              style={{ outline: 'none' }}
            >
              {!loading && <>Save</>}
              {loading && <>Saving</>}
            </button>

            <div className="navbar-top__option" onClick={copyCode}>
              Copy Code
            </div>
            {/* <div className="navbar-top__option">Share</div> */}
          </div>
          <div className="row no-gutters align-items-center">
            <LanguagePicker />
            {isLoggedIn && (
              <button className="button-primary" onClick={logout}>
                Log Out
              </button>
            )}
            {!isLoggedIn && (
              <button className="button-primary" onClick={toggleOverlay}>
                Login Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
