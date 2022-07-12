import { batch } from 'react-redux';
import { Dispatch } from 'redux';
import { IO_PANEL } from '~/constants/panel';
import { getSettings } from '~/services/settings';
import { setLanguageById, setFontSize } from '~/store/action/editor';
import { setActivePanel } from '~/store/action/ui';

export const loadSettings = (dispatch: Dispatch) => {
  const settings = getSettings();
  batch(() => {
    if (settings?.lang_id) {
      dispatch(setLanguageById(settings.lang_id));
    }
    if (settings?.fontSize) {
      dispatch(setFontSize(settings.fontSize));
    }
    dispatch(setActivePanel(IO_PANEL));
  });
};
