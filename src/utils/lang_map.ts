import { useSelector } from 'react-redux';
import { getLanguages } from '~/store/getters/editor';
import { Language } from '~/store/reducers/editor';

export function getLanguageName(lang_id) {
  const languages = useSelector(getLanguages());
  const result = languages.find((lang: Language) => lang.id == lang_id);
  return result;
}
