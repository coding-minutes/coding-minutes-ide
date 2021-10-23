import React from 'react';
import { FONTSIZE_MAP } from '~/constants/fontsizes';
import { useSelector, useDispatch } from 'react-redux';
import { getFontSize } from '~/store/getters/editor';
import { setFontSize } from '~/store/action/editor';

interface Props {}

export const FontsizePicker: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const fontSize = useSelector(getFontSize());

  function onChange(e) {
    const value = e.target.value;
    dispatch(setFontSize(value));
  }

  return (
    <select className="form-select fontsize-selector" value={fontSize} onChange={onChange}>
      {Object.keys(FONTSIZE_MAP).map((size) => (
        <option key={FONTSIZE_MAP[size]} value={FONTSIZE_MAP[size]}>
          {size}
        </option>
      ))}
    </select>
  );
};
