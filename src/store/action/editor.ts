import { Language } from "~/store/reducers/editor";
import { SET_RETURN_CODE, SET_SELECTED_LANGUAGE, SET_SOURCE, SET_STDIN, SET_STDOUT } from "~/store/action-types/editor";

export const setSelectedLanguage = (language: Language) => ({
    type: SET_SELECTED_LANGUAGE,
    payload: language
});

export const setSource = (source: string) => ({
    type: SET_SOURCE,
    payload: source
})

export const setStdout = (stdout: string) => ({
    type: SET_STDOUT,
    payload: stdout
})

export const setStdin = (stdin: string) => ({
    type: SET_STDIN,
    payload: stdin
})

export const setReturnCode = (returnCode: number) => ({
    type: SET_RETURN_CODE,
    payload: returnCode
})
