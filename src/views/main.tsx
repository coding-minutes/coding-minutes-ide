import React from 'react';

import { Navbar } from '~/components/layout/navbar';
import { CodeEditor } from '~/components/editor/code-editor';
import { IONav } from '~/components/editor/io-nav';
import { RunFAB } from '~/components/editor/run-fab';

export const MainView: React.FC = () => (
  <>
    <div className="ide-container ide-container--dark">
      <Navbar />
      <div className="main-container row no-gutters">
        <div className="flex-1 ide-section">
          <div style={{ height: '100%', width: '100%' }}>
            <CodeEditor />
          </div>
        </div>
        <IONav />
        <RunFAB />
      </div>
    </div>
  </>
);
