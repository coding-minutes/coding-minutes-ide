import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedLanguage, getLanguages } from '~/store/getters/editor';
import { setSelectedLanguage } from '~/store/action/editor';
import { Language } from '~/store/reducers/editor';

export const LanguagePicker: React.FC = () => {
  const dispatch = useDispatch();
  const languages = useSelector(getLanguages());
  const selectedLanguage = useSelector(getSelectedLanguage());
  const selectLanguage = (language) => dispatch(setSelectedLanguage(language));
  const selectLanguageById = (id) =>
    selectLanguage(languages.find((language: Language) => language.id === +id));

  return (
    <select
      className="form-select language-selector"
      value={selectedLanguage?.id}
      onChange={(e) => selectLanguageById(e.target.value)}
    >
      {languages.map((language: Language) => (
        <option key={language.id} value={language.id}>
          {language.name}
        </option>
      ))}
    </select>
  );
};
