import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTask } from 'react-use-task';

import api from '~/services/judge_api';
import { getSelectedLanguage } from '~/store/getters/editor';
import { setSelectedLanguage } from '~/store/action/editor';

export const LanguagePicker: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(getSelectedLanguage());

  const [{ isRunning, lastSuccessful }, fetchLanguages] = useTask(function* () {
    const response: any = yield api.get('languages');

    return response.data.data;
  });
  const languages: any = lastSuccessful?.value || [];

  React.useEffect(() => {
    fetchLanguages();
  }, []);

  const selectLanguage = (language) => dispatch(setSelectedLanguage(language));
  const selectLanguageById = (id) =>
    selectLanguage(languages.find((language) => language.id === +id));

  React.useEffect(() => {
    if (languages.length) {
      selectLanguage(languages[0]);
    }
  }, [languages]);

  return (
    <select
      className="form-select language-selector"
      value={selectedLanguage?.id}
      onChange={(e) => selectLanguageById(e.target.value)}
    >
      {languages.map((language) => (
        <option key={language.id} value={language.id}>
          {language.name}
        </option>
      ))}
    </select>
  );
};
