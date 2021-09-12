import {
  TOGGLE_IO_PANE,
  SET_ACTIVE_MODAL,
  TOGGLE_BANNER,
  TOGGLE_OPTIONS_MENU,
  SET_ACTIVE_PANEL,
} from '~/store/action-types/ui';

export interface UIState {
  io_pane_open: boolean;
  active_modal: string | null;
  isBannerVisible: boolean;
  isOptionsMenuOpen: boolean;
  active_panel: string | null;
}

const initialState: UIState = {
  io_pane_open: true,
  active_modal: null,
  isBannerVisible: true,
  isOptionsMenuOpen: false,
  active_panel: '',
};

export const uiReducer = (state: UIState = initialState, action): UIState => {
  switch (action.type) {
    case TOGGLE_IO_PANE:
      return {
        ...state,
        io_pane_open: !state.io_pane_open,
      };
    case SET_ACTIVE_MODAL:
      return {
        ...state,
        active_modal: action.payload,
      };

    case TOGGLE_BANNER:
      return {
        ...state,
        isBannerVisible: !state.isBannerVisible,
      };
    case TOGGLE_OPTIONS_MENU:
      return {
        ...state,
        isOptionsMenuOpen: !state.isOptionsMenuOpen,
      };
    case SET_ACTIVE_PANEL:
      return {
        ...state,
        active_panel: action.payload,
      };
    default:
      return state;
  }
};
