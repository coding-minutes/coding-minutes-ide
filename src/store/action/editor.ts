import { Language } from '~/store/reducers/editor';
import {
  SET_RETURN_CODE,
  SET_SELECTED_LANGUAGE_BY_ID,
  SET_SOURCE,
  SET_STDIN,
  SET_STDOUT,
  SET_STUBS,
  SET_LANGUAGES,
  SET_FONT_SIZE,
} from '~/store/action-types/editor';
import { listToMap } from '~/utils/store';
import { setSettings } from '~/services/settings';

interface CodeStub {
  language_id: number;
  stub: string;
}

export const setSource = (source: string) => ({
  type: SET_SOURCE,
  payload: source,
});

export const setStdout = (stdout: string) => ({
  type: SET_STDOUT,
  payload: stdout,
});

export const setStdin = (stdin: string) => ({
  type: SET_STDIN,
  payload: stdin,
});

export const setReturnCode = (returnCode: number) => ({
  type: SET_RETURN_CODE,
  payload: returnCode,
});

export const setCodeStubs = (codeStubs: Array<CodeStub>) => ({
  type: SET_STUBS,
  payload: listToMap(codeStubs, 'language_id', (obj) => obj.stub),
});

export const setLanguages = (languages: Array<Language>) => ({
  type: SET_LANGUAGES,
  payload: languages,
});

export const setLanguageById = (id: string | number) => {
  setSettings({ lang_id: id });
  return {
    type: SET_SELECTED_LANGUAGE_BY_ID,
    payload: id,
  };
};

export const setFontSize = (size: string) => {
  setSettings({ fontSize: size });
  return {
    type: SET_FONT_SIZE,
    payload: size,
  };
};
