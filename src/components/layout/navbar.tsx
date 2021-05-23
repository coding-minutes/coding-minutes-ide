import React from 'react';

import { LanguagePicker } from '~/components/editor/language-picker';

export const Navbar: React.FC = () => (
  <div className="navbar-top">
    <div className="h-inherit">
      <div className="row no-gutters align-items-center justify-content-between py-2 px-5 h-inherit">
        <a href="https://codingminutes.com/" target="_blank">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cm-oneline.svg"
            alt="Coding Minutes Logo"
            style={{ height: '20px' }}
          />
        </a>
        <div className="row no-gutters align-items-center">
          <LanguagePicker />
          {/* <div className="open-io-button pulse">
            <div>&gt;_</div>

            <div className="open-io-button__tooltip">Toggle I/O pane</div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
);
