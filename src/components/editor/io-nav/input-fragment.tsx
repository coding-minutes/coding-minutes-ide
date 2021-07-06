import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStdin } from '~/store/action/editor';
import { getStdin } from '~/store/getters/editor';

export const InputFragment: React.FC = () => {
  const dispatch = useDispatch();

  const stdin = useSelector(getStdin());
  const setInput = (input) => dispatch(setStdin(input));

  return (
    <div className="input-box no-scrollbar">
      <div className="row no-gutters align-items-center justify-content-between mb-4">
        <div className="io-header flex-1">Enter Input</div>
      </div>
      <textarea
        placeholder="Input goes here..."
        value={stdin}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
    </div>
  );
};
