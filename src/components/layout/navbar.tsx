import React from 'react';
import { useDispatch } from 'react-redux';

import { LanguagePicker } from '~/components/editor/language-picker';

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();

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
            <button className="button-primary">Login Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
