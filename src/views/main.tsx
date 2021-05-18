import React from 'react';

import { Navbar } from '~/components/layout/navbar';
import { CodeEditor } from '~/components/editor/code-editor';

export const MainView: React.FC = () => (
  <>
    <div className="ide-container ide-container--dark">
      <Navbar />
      <div className="main-container row no-gutters">
        <div className="flex-1 ide-section">
          <div style={{height: "100%", width: "100%"}}>
            <CodeEditor />
          </div>
        </div>
        <div className="io-section">
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
        </div>
      </div>
    </div>
  </>
);
