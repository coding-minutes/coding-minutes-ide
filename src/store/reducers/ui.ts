import { TOGGLE_IO_PANE } from "~/store/action-types/ui"

export interface UIState {
    io_pane_open: boolean;
}

const initialState: UIState = {
    io_pane_open: true
}

export const uiReducer = (state: UIState = initialState, action): UIState => {
    switch(action.type) {
        case TOGGLE_IO_PANE:
            return {
                ...state,
                io_pane_open: !state.io_pane_open
            }
        default: return state
    }
}
