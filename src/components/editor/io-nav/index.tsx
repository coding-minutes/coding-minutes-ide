import React from 'react';
import { useSelector } from 'react-redux';
import { getStdout } from '~/store/getters/editor';

import { InputFragment } from './input-fragment';
import { OutputFragment } from './output-fragment';

enum IOTabs {
  INPUT,
  CONSOLE,
}

export const IONav: React.FC = () => {
  const stdout = useSelector(getStdout());
  const [selectedTab, setSelectedTab] = React.useState(stdout ? IOTabs.CONSOLE : IOTabs.INPUT);

  return (
    <div className="d-flex flex-col io-section">
      <div className="flex-1 io-box">
        {selectedTab === IOTabs.INPUT && <InputFragment />}
        {selectedTab === IOTabs.CONSOLE && <OutputFragment />}
      </div>
      <div className="io-navigation">
        <div
          className={`tab ${selectedTab === IOTabs.INPUT && 'active'}`}
          onClick={() => setSelectedTab(IOTabs.INPUT)}
        >
          Input
        </div>
        <div
          className={`tab ${selectedTab === IOTabs.CONSOLE && 'active'}`}
          onClick={() => setSelectedTab(IOTabs.CONSOLE)}
        >
          Console
        </div>
      </div>
    </div>
  );
};
