import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTask } from 'react-use-task';

import { pollSubmission, Submission } from '~/components/editor/run-fab/actions';
import { sleep } from '~/components/editor/run-fab/utils';
import { runCode } from '~/services/judge';
import { getCurrentSource, getSelectedLanguage, getStdin } from '~/store/getters/editor';
import { setReturnCode, setStdout } from '~/store/action/editor';

const MAX_RETRIES = 20;

export enum FabState {
  idle = 'idle',
  correct = 'correct',
  error = 'error',
}
export interface RunFabProps {
  state: FabState;
}

export const RunFAB = (props: RunFabProps) => {
  const dispatch = useDispatch();

  const currentSource = useSelector(getCurrentSource());
  const selectedLanguage = useSelector(getSelectedLanguage());
  const currentInput = useSelector(getStdin());

  const setOutput = (stdout) => dispatch(setStdout(stdout));
  const setCode = (returnCode) => dispatch(setReturnCode(returnCode));

  const [{ isRunning }, perform] = useTask(function* (source, language, input) {
    const response: any = yield runCode({
      source_code: btoa(source),
      language_id: language,
      stdin: btoa(input),
    });

    const submissionId = response.data.submission_id;

    let retry = MAX_RETRIES;
    while (retry--) {
      yield sleep(1000);
      const submission: Submission = yield pollSubmission(submissionId);

      if (submission.compile_output || submission.stdout || submission.stderr) {
        setOutput(submission.compile_output || submission.stderr || submission.stdout);
        setCode(submission.stderr || submission.compile_output ? 1 : 0);
        return;
      }
    }
  });

  const execute = () => perform(currentSource, selectedLanguage.id, currentInput);

  const ButtonClassMap = {
    idle: 'run-button--run-code',
    correct: 'run-button--success',
    error: 'run-button--error',
  };

  const IconMap = {
    idle: 'https://minio.codingminutes.com/assets/play-white.svg',
    correct: 'https://minio.codingminutes.com/assets/play-white.svg',
    error: 'https://minio.codingminutes.com/assets/play-white.svg',
  };

  const buttonClass = ButtonClassMap[props.state];
  const icon = IconMap[props.state];

  return (
    <button
      onClick={() => execute()}
      disabled={isRunning && props.state === 'idle'}
      className="run-button__container"
    >
      {isRunning ? (
        <svg height="90" width="90" className="ring-animation">
          <circle cx="45" cy="45" r="42" />
        </svg>
      ) : (
        ''
      )}
      <div className={`run-button ${buttonClass}`}>
        <img src={icon} style={{ height: '100%', width: '100%' }} />
      </div>
    </button>
  );
};
