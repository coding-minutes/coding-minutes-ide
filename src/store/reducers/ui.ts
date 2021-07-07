import { TOGGLE_IO_PANE, TOGGLE_MODAL_OVERLAY } from "~/store/action-types/ui"

export interface UIState {
    io_pane_open: boolean;
    modal_overlay_visible: boolean;
}

const initialState: UIState = {
    io_pane_open: true,
    modal_overlay_visible: false
}

export const uiReducer = (state: UIState = initialState, action): UIState => {
    switch(action.type) {
        case TOGGLE_IO_PANE:
            return {
                ...state,
                io_pane_open: !state.io_pane_open
            }
        case TOGGLE_MODAL_OVERLAY:
            return {
                ...state,
                modal_overlay_visible: !state.modal_overlay_visible
            }
        default: return state
    }
}
