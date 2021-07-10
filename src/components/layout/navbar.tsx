import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LanguagePicker } from '~/components/editor/language-picker';
// import { isModalOverlayVisible } from '~/store/getters/ui';
import { toggleModalOverlay } from '~/store/action/ui';
import { getIsLoggedIn, getJwt } from '~/store/getters/auth';
import { logoutUser } from '~/store/action/auth';
import IdeClient from '~/services/ide_api';
import { getCurrentSource, getStdin, getSelectedLanguage } from '~/store/getters/editor';
import { useHistory, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const isModalVisible = useSelector(isModalOverlayVisible());
  const toggleOverlay = () => dispatch(toggleModalOverlay());
  const isLoggedIn = useSelector(getIsLoggedIn());

  const data = {
    lang: useSelector(getSelectedLanguage()) || 'cpp',
    source: useSelector(getCurrentSource()),
    input: useSelector(getStdin()),
  };

  const jwt = useSelector(getJwt());

  const logout = () => {
    dispatch(logoutUser());
  };

  const saveCode = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    const config = {
      headers: {
        Authorization: `jwt ${jwt}`,
      },
    };

    if (!id) {
      // This is a fresh code. Save it as new.

      try {
        const response = await IdeClient.post('/', data, config);
        const { id } = response.data;
        history.push(`/?id=${id}`);
      } catch (error) {
        console.error(error);
        alert('Could not save code');
      }
    } else {
      // This is a previously saved code as the ID exists. The user wants to update this.
      try {
        const response = await IdeClient.patch(`/${id}`, data, config);
        const newId = response.data.id;

        // If the current user is the owner of the code, do nothing
        // Else update the Id in the URL as this code was saved as new.
        if (newId == id) {
          return;
        } else {
          history.push(`/?id=${newId}`);
        }
      } catch (error) {
        console.error(error);
        alert('Could not save code');
      }
    }
  };

  return (
    <div className="navbar-top">
      <div className="h-inherit">
        <div className="row no-gutters align-items-center justify-content-between py-2 px-5 h-inherit">
          <div className="row no-gutters align-items-center">
            <a href="https://codingminutes.com/" target="_blank" className="mr-5">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cm-oneline.svg"
                alt="Coding Minutes Logo"
                style={{ height: '20px' }}
              />
            </a>
            {isLoggedIn && (
              <div className="navbar-top__option" onClick={saveCode}>
                Save
              </div>
            )}
            <div className="navbar-top__option">Copy Code</div>
            <div className="navbar-top__option">Share</div>
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
