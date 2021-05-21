import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTask } from 'react-use-task';

import { pollSubmission, Submission } from '~/components/editor/run-fab/actions';
import { sleep } from '~/components/editor/run-fab/utils';
import api from '~/services/api';
import { getCurrentSource, getSelectedLanguage, getStdin } from '~/store/getters/editor';
import { setReturnCode, setStdout } from '~/store/action/editor';


const MAX_RETRIES = 20;


export enum FabState {
  idle = 'idle',
  correct = 'correct',
  error = 'error'
}
export interface RunFabProps {
  state: FabState
}

export const RunFAB = (props: RunFabProps) => {
  const dispatch = useDispatch()
  
  const currentSource = useSelector(getCurrentSource())
  const selectedLanguage = useSelector(getSelectedLanguage())
  const currentInput = useSelector(getStdin())

  const setOutput = (stdout) => dispatch(setStdout(stdout))
  const setCode = (returnCode) => dispatch(setReturnCode(returnCode))

  const [{ isRunning }, perform] = useTask(function *(source, language, input) {
    const response: any = yield api.post("run", {
      source_code: btoa(source),
      language_id: language,
      stdin: btoa(input),
    })

    const submissionId = response.data.submission_id;

    let retry = MAX_RETRIES;
    while (retry--) {
      yield sleep(1000)
      const submission: Submission = yield pollSubmission(submissionId);

      if (submission.stdout || submission.stderr) {
        setOutput(submission.stderr || submission.stdout)
        setCode(submission.stderr ? 1 : 0);
        return
      }
    }
  })

  const execute = () => perform(currentSource, selectedLanguage.id, currentInput);

  const ButtonClassMap = {
    idle: 'run-button--run-code',
    correct: 'run-button--success',
    error: 'run-button--error'
  }
  const IconMap = {
    idle: 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/tick-white.svg',
    correct: 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/tick-white.svg',
    error: 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cross-white.svg',
  }

  const buttonClass = ButtonClassMap[props.state]
  const icon = IconMap[props.state]

  return (
    <button
      onClick={() => execute()}
      disabled={isRunning && props.state === 'idle'}
    >
      <div className="run-button__container">
        <svg 
          height="90" 
          width="90" 
          className={isRunning ? "ring-animation" : ""}
        >
          <circle cx="45" cy="45" r="42" />
        </svg>
        <div 
          className={`run-button ${buttonClass}`}
        >
          <img src={icon} />
        </div>
      </div>
    </button>
  );
};
