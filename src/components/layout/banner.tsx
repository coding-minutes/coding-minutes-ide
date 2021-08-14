import React from 'react';
import { toggleBanner } from '~/store/action/ui';
import { useDispatch } from 'react-redux';
import Markdown from 'markdown-to-jsx';
import banner_data from '~/data/banner.json';

function pickRandomBannerData(data) {
  const keys = Object.keys(data);
  return data[keys[(keys.length * Math.random()) << 0]];
}

export const Banner: React.FC = () => {
  const { content, link } = pickRandomBannerData(banner_data);
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
