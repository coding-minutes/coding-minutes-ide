import { TOGGLE_IO_PANE, SET_ACTIVE_MODAL } from "~/store/action-types/ui"

export interface UIState {
    io_pane_open: boolean;
    active_modal: string | null;
}

const initialState: UIState = {
    io_pane_open: true,
    active_modal: null
}

export const uiReducer = (state: UIState = initialState, action): UIState => {
    switch(action.type) {
        case TOGGLE_IO_PANE:
            return {
                ...state,
                io_pane_open: !state.io_pane_open
            }
        case SET_ACTIVE_MODAL:
            return {
                ...state,
                active_modal: action.payload
            }
        default: return state
    }
}
