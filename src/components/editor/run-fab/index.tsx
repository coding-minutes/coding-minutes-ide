import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTask } from 'react-use-task';

import { pollSubmission, Submission } from '~/components/editor/run-fab/actions';
import { sleep } from '~/components/editor/run-fab/utils';
import api from '~/services/api';
import { getCurrentSource, getSelectedLanguage, getStdin } from '~/store/getters/editor';
import { setStdout } from '~/store/action/editor';


const MAX_RETRIES = 20;

export const RunFAB = () => {
  const dispatch = useDispatch()
  
  const currentSource = useSelector(getCurrentSource())
  const selectedLanguage = useSelector(getSelectedLanguage())
  const currentInput = useSelector(getStdin())

  const setOutput = (stdout) => dispatch(setStdout(stdout))

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
        return
      }
    }
  })

  const execute = () => perform(currentSource, selectedLanguage.id, currentInput);

  return (
    <button
      onClick={() => execute()}
      disabled={isRunning}
    >
      <div className="run-button__container">
        <svg 
          height="90" 
          width="90" 
          className={isRunning ? "ring-animation" : ""}
        >
          <circle cx="45" cy="45" r="42" />
        </svg>
        <div className="run-button run-button--run-code">
          <div style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: '-8px' }}>
            &#8250;&#8250;&#8250;
          </div>
        </div>
      </div>
    </button>
  );
};
