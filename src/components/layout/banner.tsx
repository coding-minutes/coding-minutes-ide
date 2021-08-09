import React from 'react';
import { toggleBanner } from '~/store/action/ui';
import { useDispatch } from 'react-redux';
import data from '~/data/banner.json';
import Markdown from 'markdown-to-jsx';

function pickRandomBannerData(data) {
  const keys = Object.keys(data);
  console.log(keys);
  return data[keys[(keys.length * Math.random()) << 0]];
}

interface Props {}

export const Banner: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { content, link } = pickRandomBannerData(data);

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
