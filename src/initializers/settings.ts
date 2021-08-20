import { Dispatch } from 'redux';
import { getSettings } from '~/utils/settings';
import { setLanguageById } from '~/store/action/editor';

export const loadSettings = (dispatch: Dispatch) => {
  const settings = getSettings();
  if (settings?.lang_id) {
    dispatch(setLanguageById(settings.lang_id));
  }
};
