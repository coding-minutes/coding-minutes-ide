import React from 'react';

import { LanguagePicker } from '~/components/editor/language-picker';

export const Navbar: React.FC = () => (
  <div className="navbar-top">
    <div className="h-inherit">
      <div className="row no-gutters align-items-center justify-content-between py-4 px-5 h-inherit">
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/random.png"
          alt="Coding Minutes Logo"
          style={{ height: '40px' }}
        />
        <div>
          <LanguagePicker />
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/terminal.svg"
            style={{ height: '30px', cursor: 'pointer'}}
          />
        </div>
      </div>
    </div>
  </div>
);
