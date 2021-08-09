import React from 'react';
import { toggleBanner } from '~/store/action/ui';
import { useDispatch } from 'react-redux';
import Markdown from 'markdown-to-jsx';

interface Props {
  content: string;
  link: string;
}

export const Banner: React.FC<Props> = ({ link, content }) => {
  const dispatch = useDispatch();

  function closeBanner() {
    dispatch(toggleBanner());
  }

  return (
    <>
      <div className="top-banner">
        <div />
        <a href={link || 'https://codingminutes.com/'} target="_blank" rel="noopener">
          <Markdown>{content}</Markdown>
        </a>
        <div onClick={closeBanner} className="top-banner--cross">
          ✕
        </div>
      </div>
    </>
  );
};
