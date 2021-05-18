import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentSource, getSelectedLanguage } from '~/store/getters/editor';
import { setSource } from '~/store/action/editor';

export const CodeEditor = () => {
  const dispatch = useDispatch();

  const selectedLanguage = useSelector(getSelectedLanguage());
  const source = useSelector(getCurrentSource());
  const editor_code = selectedLanguage?.editor_code || '';

  const setEditorSource = (newSource) => dispatch(setSource(newSource));

  return (
    <MonacoEditor
      language={editor_code}
      theme="vs-dark"
      value={source}
      onChange={setEditorSource}
    />
  );
};
