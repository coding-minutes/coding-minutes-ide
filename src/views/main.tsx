import React from 'react';

import { Navbar } from '~/components/layout/navbar';
import { CodeEditor } from '~/components/editor/code-editor';
import { IONav } from '~/components/editor/io-nav';
import { FabState, RunFAB } from '~/components/editor/run-fab';
import { useDispatch, useSelector } from 'react-redux';
import { getReturnCode } from '~/store/getters/editor';
import { setReturnCode } from '~/store/action/editor';

export const MainView: React.FC = () => {
  const dispatch = useDispatch()
  const returnCode = useSelector(getReturnCode());

  const state: FabState = new Array(
    +returnCode === 0 && FabState.correct,
    +returnCode !== 0 && FabState.error,
    returnCode === null && FabState.idle
  ).reduce((acc, cur) => acc || cur)

  React.useEffect(() => {
    if (state != FabState.idle) {
      setTimeout(() => {
        dispatch(setReturnCode(null))
      }, 2000)
    }
  }, [state])

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
          <IONav />
          <RunFAB state={state} />
        </div>
      </div>
    </>
  );
}
