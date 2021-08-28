import { Dispatch } from 'redux';
import { getSettings } from '~/services/settings';
import { setLanguageById, setFontSize } from '~/store/action/editor';

export const loadSettings = (dispatch: Dispatch) => {
  const settings = getSettings();
  if (settings?.lang_id) {
    dispatch(setLanguageById(settings.lang_id));
  }
  if (settings?.fontSize) {
    dispatch(setFontSize(settings.fontSize));
  }
};
