import { Language } from "~/store/reducers/editor";
import { SET_RETURN_CODE, SET_SELECTED_LANGUAGE, SET_SOURCE, SET_STDIN, SET_STDOUT, SET_STUBS } from "~/store/action-types/editor";
import { listToMap } from "~/utils/store"


interface CodeStub {
    language_id: number;
    stub: string;
}

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

export const setCodeStubs = (codeStubs: Array<CodeStub>) => ({
    type: SET_STUBS,
    payload: listToMap(codeStubs, "language_id", (obj) => obj.stub)
})
