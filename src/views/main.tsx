import React from 'react';

export const MainView: React.FC = () => (
  <>
    <div className="ide-container ide-container--dark">
      <div className="navbar-top">
        <div className="h-inherit">
          <div className="row no-gutters align-items-center justify-content-between py-4 px-5 h-inherit">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/random.png"
              alt="Coding Minutes Logo"
              style={{ height: '40px' }}
            />
            <div>
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
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/three-dots-stroke.svg"
                style={{ height: '40px', cursor: "pointer" }}
              />
            </div>
            {/* <div className="language-selector">
              <select className="language-selector__content">
                <option className="language-selector__content__item py-2" disabled selected>Select Language</option>
                <option className="language-selector__content__item py-2">Python</option>
                <option className="language-selector__content__item py-2">Python</option>
                <option className="language-selector__content__item py-2">Python</option>
                <option className="language-selector__content__item py-2">Python</option>
                <option className="language-selector__content__item py-2">Python</option>
                <option className="language-selector__content__item py-2">Python</option>
                <option className="language-selector__content__item py-2">Python</option>
                <option className="language-selector__content__item py-2">Python</option>
              </select>
            </div> */}
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
          <div className="run-button__container">
            <svg height="90" width="90" className="ring-animation">
              <circle cx="45" cy="45" r="42" />
            </svg>
            <div className="run-button run-button--run-code">
              <div style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: '-8px' }}>
                &#8250;&#8250;&#8250;
              </div>
            </div>
          </div>
          {/* <div className="run-button__container">
            <div className="run-button run-button--success">
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/tick-white.svg" />
            </div>
          </div> */}
          {/* <div className="run-button__container">
            <div className="run-button run-button--error">
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cross-white.svg" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </>
);
