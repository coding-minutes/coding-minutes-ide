import React from 'react';
import Editor from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentSource, getSelectedLanguage, getFontSize } from '~/store/getters/editor';
import { setSource } from '~/store/action/editor';

export const CodeEditor = () => {
  const dispatch = useDispatch();

  const selectedLanguage = useSelector(getSelectedLanguage());
  const source = useSelector(getCurrentSource());
  const fontSize = useSelector(getFontSize());
  const editor_code = selectedLanguage?.editor_code || '';

  const setEditorSource = (newSource) => dispatch(setSource(newSource));

  return (
    <Editor
      language={editor_code}
      theme="vs-dark"
      value={source}
      onChange={setEditorSource}
      options={{
        automaticLayout: true,
        fontSize: fontSize,
      }}
    />
  );
};
