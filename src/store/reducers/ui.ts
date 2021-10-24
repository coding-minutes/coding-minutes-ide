import {
  TOGGLE_IO_PANE,
  SET_ACTIVE_MODAL,
  TOGGLE_BANNER,
  SET_ACTIVE_PANEL,
  SET_TOAST,
} from '~/store/action-types/ui';

export enum ToastType {
  DANGER,
  SUCCESS,
  WARNING,
  INFO,
}

export interface Toast {
  message: string;
  type: ToastType;
  timeout: number;
}

export interface UIState {
  io_pane_open: boolean;
  active_modal: string | null;
  isBannerVisible: boolean;
  active_panel: string | null;
  toast: Toast | null;
}

const initialState: UIState = {
  io_pane_open: true,
  active_modal: null,
  isBannerVisible: true,
  active_panel: '',
  toast: null,
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
    case SET_ACTIVE_PANEL:
      return {
        ...state,
        active_panel: action.payload,
      };

    case SET_TOAST:
      return {
        ...state,
        toast: action.payload,
      };
    default:
      return state;
  }
};
