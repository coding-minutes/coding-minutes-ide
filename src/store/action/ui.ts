import { TOGGLE_IO_PANE, TOGGLE_MODAL_OVERLAY } from "~/store/action-types/ui";

export const toggleIOPane = () => ({
    type: TOGGLE_IO_PANE
});

export const toggleModalOverlay = () => ({
    type: TOGGLE_MODAL_OVERLAY
})
