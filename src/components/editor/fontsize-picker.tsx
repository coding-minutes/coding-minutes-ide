import React from 'react';
import { FONTSIZE_MAP } from '~/constants/fontsizes';
import { useSelector, useDispatch } from 'react-redux';
import { getFontSize } from '~/store/getters/editor';
import { setFontSize } from '~/store/action/editor';
import { Dropdown } from '~/components/base/dropdown';

interface Props {}

export const FontsizePicker: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const fontSize = useSelector(getFontSize());

  function changeFontsize(value) {
    dispatch(setFontSize(value));
  }

  console.log(FONTSIZE_MAP);

  const key = Object.keys(FONTSIZE_MAP).find((size) => FONTSIZE_MAP[size] === fontSize);

  return (
    <Dropdown
      title={key}
      onChange={changeFontsize}
      selected={fontSize}
      className={'fontsize'}
      options={Object.keys(FONTSIZE_MAP).map((size) => ({
        value: FONTSIZE_MAP[size],
        Element: (
          <div>
            <span>Aa {FONTSIZE_MAP[size]}</span>
            <span>{size}</span>
          </div>
        ),
      }))}
    />
  );
};
