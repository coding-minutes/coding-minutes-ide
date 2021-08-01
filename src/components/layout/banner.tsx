import React from 'react';
import { toggleBanner } from '~/store/action/ui';
import { useDispatch } from 'react-redux';

interface Props {}

export const Banner: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  function closeBanner() {
    dispatch(toggleBanner());
  }

  return (
    <>
      <div className="top-banner">
        <div />
        <div>
          🎉 Coding Minutes IDE 2.0 is live.{' '}
          <span className="banner--green-text">Try out the new exciting features.</span>
        </div>
        <div onClick={closeBanner} className="top-banner--cross">
          ✕
        </div>
      </div>
    </>
  );
};
