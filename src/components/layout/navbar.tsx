import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LanguagePicker } from '~/components/editor/language-picker';
// import { isModalOverlayVisible } from '~/store/getters/ui';
import { toggleModalOverlay } from '~/store/action/ui';

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  // const isModalVisible = useSelector(isModalOverlayVisible());
  const toggleOverlay = () => dispatch(toggleModalOverlay());

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
            <div className="navbar-top__option">Save</div>
            <div className="navbar-top__option">Copy Code</div>
            <div className="navbar-top__option">Share</div>
          </div>
          <div className="row no-gutters align-items-center">
            <LanguagePicker />
            <button className="button-primary" onClick={toggleOverlay}>
              Login Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
