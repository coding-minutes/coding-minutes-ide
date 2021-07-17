import { TOGGLE_IO_PANE, SET_ACTIVE_MODAL } from "~/store/action-types/ui";

export const toggleIOPane = () => ({
    type: TOGGLE_IO_PANE
});

export const setActiveModal = (modalName?: string) => ({
    type: SET_ACTIVE_MODAL,
    payload: modalName || null
})
