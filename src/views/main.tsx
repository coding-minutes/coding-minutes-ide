import React from 'react';
import { useTask } from 'react-use-task';
import { Navbar } from '~/components/layout/navbar';
import { CodeEditor } from '~/components/editor/code-editor';
import { IONav } from '~/components/editor/io-nav';
import { FabState, RunFAB } from '~/components/editor/run-fab';
import { useDispatch, useSelector } from 'react-redux';
import { getReturnCode } from '~/store/getters/editor';
import { setReturnCode, setSource, setStdin, setSelectedLanguage } from '~/store/action/editor';
import { isIOPaneOpen } from '~/store/getters/ui';
import { initalize } from '~/initializers';
import { toggleIOPane } from '~/store/action/ui';
import IdeApi from '~/services/ide_api';
import { useLocation } from 'react-router-dom';
import { LoginModal } from '~/components/auth/login-modal';
import { loginUser } from '~/store/action/auth';
import AuthClient from '~/services/auth_api';

const getFabStateForReturnCode = (returnCode: number | null): FabState => {
  if (returnCode === 0) return FabState.correct;

  if (Number.isInteger(returnCode) && returnCode !== 0) return FabState.error;

  return FabState.idle;
};

export const MainView: React.FC = () => {
  const dispatch = useDispatch();
  const returnCode = useSelector(getReturnCode());
  const isIOOpen = useSelector(isIOPaneOpen());
  const location = useLocation();

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

  React.useEffect(() => {
    async function fetchCode(id: number | string) {
      try {
        const response = await IdeApi.get(`/${id}`);

        const { data } = response;
        dispatch(setSelectedLanguage(data.lang));
        dispatch(setSource(data.source));
        dispatch(setStdin(data.input));
      } catch (error) {
        console.error('Fetch code error = ', error);
      }
    }
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    if (!id) {
      return;
    }

    fetchCode(id);
  }, []);

  React.useEffect(() => {
    async function verifyJwt(jwt: string) {
      try {
        const response = await AuthClient.post(
          '/verify',
          {},
          {
            headers: {
              Authorization: `jwt ${jwt}`,
            },
          },
        );

        const user = response.data;
        dispatch(
          loginUser({
            user,
            jwt,
            isLoggedIn: true,
          }),
        );
      } catch (error) {
        // Invalid JWT
        localStorage.removeItem('coding-minutes-ide-jwt');
      }
    }

    // Check if jwt is present in localstorage. If present, login user.
    const jwt: string = localStorage.getItem('coding-minutes-ide-jwt');
    if (!jwt) {
      return;
    }

    verifyJwt(jwt);
  }, []);

  return (
    <>
      <div className="ide-container ide-container--dark">
        <LoginModal />
        <Navbar />
        <div className="main-container row no-gutters">
          <div className="flex-1 ide-section">
            <div style={{ height: '100%', width: '100%' }}>
              <CodeEditor />
            </div>
          </div>
          <IONav className={isIOOpen ? '' : 'io-section--hidden'} />
          <RunFAB state={state} />
          <div className="open-io-button" onClick={toggleIO}>
            <div className="open-io-button__icon">&gt;</div>

            {/* <div className="open-io-button__tooltip">Toggle I/O pane</div> */}
          </div>
        </div>
      </div>
    </>
  );
};
