import { Language } from "~/store/reducers/editor";
import { SET_SELECTED_LANGUAGE, SET_SOURCE } from "~/store/action-types/editor";

export const setSelectedLanguage = (language: Language) => ({
    type: SET_SELECTED_LANGUAGE,
    payload: language
});

export const setSource = (source: string) => ({
    type: SET_SOURCE,
    payload: source
})
