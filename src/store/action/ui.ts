import {
  TOGGLE_IO_PANE,
  SET_ACTIVE_MODAL,
  TOGGLE_BANNER,
  TOGGLE_OPTIONS_MENU,
  SET_ACTIVE_PANEL,
} from '~/store/action-types/ui';

export const toggleIOPane = () => ({
  type: TOGGLE_IO_PANE,
});

export const setActiveModal = (modalName?: string) => ({
  type: SET_ACTIVE_MODAL,
  payload: modalName || null,
});

export const toggleBanner = () => ({
  type: TOGGLE_BANNER,
});

export const toggleOptionsMenu = () => ({
  type: TOGGLE_OPTIONS_MENU,
});

export const setActivePanel = (panel?: string) => ({
  type: SET_ACTIVE_PANEL,
  payload: panel || null,
});
