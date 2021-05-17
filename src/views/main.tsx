import React from 'react';

export const MainView: React.FC = () => (
  <>
    <div className="ide-container ide-container--dark">
      <div className="navbar-top">
        <div className="width-limiter h-inherit">
          <div className="row no-gutters align-items-center justify-content-between py-4 px-5 h-inherit">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/random.png"
              alt="Coding Minutes Logo"
              style={{ height: '50px' }}
            />
            <div className="language-selector">
              <div className="language-selector-placeholder">Select Language</div>
              <div className="language-selector__content">
                <div className="language-selector__content__item py-2">Python</div>
                <div className="language-selector__content__item py-2">Python</div>
                <div className="language-selector__content__item py-2">Python</div>
                <div className="language-selector__content__item py-2">Python</div>
                <div className="language-selector__content__item py-2">Python</div>
                <div className="language-selector__content__item py-2">Python</div>
                <div className="language-selector__content__item py-2">Python</div>
                <div className="language-selector__content__item py-2">Python</div>
                <div className="language-selector__content__item py-2">Python</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container row no-gutters">
        <div className="flex-1 ide-section">
          {/* The IDE goes here */}
          {/* <div style={{background: "white", height: "100%", width: "100%"}}></div> */}
        </div>
        <div className="io-section io-section--hidden">
          <div className="io-navigation">
            <div className="tab active">Input</div>
            <div className="tab">Console</div>
          </div>
          <div className="run-button">
            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/tick-white.svg" />
          </div>
        </div>
      </div>
    </div>
  </>
);
