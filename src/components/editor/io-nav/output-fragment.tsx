import React from 'react';
import { useSelector } from 'react-redux';
import { getStdout } from '~/store/getters/editor';

export const OutputFragment: React.FC = () => {
  const stdoutB64 = useSelector(getStdout());
  const stdout = stdoutB64 && atob(stdoutB64);

  return (
    <div className="output-box no-scrollbar">
      <div className="io-header mb-4">Output</div>
      <pre>{stdout}</pre>
    </div>
  );
};
