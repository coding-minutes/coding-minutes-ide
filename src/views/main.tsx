import React from 'react';
import { useTask } from 'react-use-task';

import { Navbar } from '~/components/layout/navbar';
import { CodeEditor } from '~/components/editor/code-editor';
import { IONav } from '~/components/editor/io-nav';
import { FabState, RunFAB } from '~/components/editor/run-fab';
import { useDispatch, useSelector } from 'react-redux';
import { getReturnCode } from '~/store/getters/editor';
import { setReturnCode } from '~/store/action/editor';
import { isIOPaneOpen } from '~/store/getters/ui';
import { initalize } from '~/initializers';
import { toggleIOPane } from '~/store/action/ui';

const getFabStateForReturnCode = (returnCode: number | null): FabState => {
  if (returnCode === 0) return FabState.correct;

  if (Number.isInteger(returnCode) && returnCode !== 0) return FabState.error;

  return FabState.idle;
};

export const MainView: React.FC = () => {
  const dispatch = useDispatch();
  const returnCode = useSelector(getReturnCode());
  const isIOOpen = useSelector(isIOPaneOpen());

  const state = getFabStateForReturnCode(returnCode);

  const toggleIO = () => dispatch(toggleIOPane());

  const [{}, perform] = useTask(initalize);

  React.useEffect(() => {
    perform(dispatch);
  }, []);

  React.useEffect(() => {
    if (state != FabState.idle) {
      setTimeout(() => {
        dispatch(setReturnCode(null));
      }, 2000);
    }
  }, [state]);

  return (
    <>
      <div className="ide-container ide-container--dark">
        <Navbar />
        <div className="main-container row no-gutters">
          <div className="flex-1 ide-section">
            <div style={{ height: '100%', width: '100%' }}>
              <CodeEditor />
            </div>
          </div>
          <div className="open-io-button" onClick={toggleIO}>
            <div>&gt;_</div>

            {/* <div className="open-io-button__tooltip">Toggle I/O pane</div> */}
          </div>
          <IONav className={isIOOpen ? '' : 'io-section--hidden'} />
          <RunFAB state={state} />
        </div>
      </div>
    </>
  );
};
