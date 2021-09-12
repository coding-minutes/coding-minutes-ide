import React from 'react';
import { useSelector } from 'react-redux';
import { getReturnCode, getStdout } from '~/store/getters/editor';
import { getActivePanel } from '~/store/getters/ui';
import { IO_PANEL, SAVELIST_PANEL } from '~/constants/panel';

import { InputFragment } from './input-fragment';
import { OutputFragment } from './output-fragment';
import Savelist from './savelist';

enum IOTabs {
  INPUT,
  CONSOLE,
}

export interface IONavProps {
  className: string;
}

export const IONav: React.FC<IONavProps> = (props) => {
  const { className } = props;

  const stdout = useSelector(getStdout());
  const returnCode = useSelector(getReturnCode());
  const [selectedTab, setSelectedTab] = React.useState(stdout ? IOTabs.CONSOLE : IOTabs.INPUT);
  const activePanel = useSelector(getActivePanel());

  React.useEffect(() => {
    if (returnCode !== null) {
      setSelectedTab(IOTabs.CONSOLE);
    }
  }, [returnCode]);

  return (
    <div className={`d-flex flex-col io-section ${className}`}>
      {activePanel == SAVELIST_PANEL && <Savelist />}
      {activePanel == IO_PANEL && (
        <div className="flex-1 io-box">
          <InputFragment />
          <OutputFragment />
        </div>
      )}
    </div>
  );
};
