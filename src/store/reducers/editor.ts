import {
  SET_RETURN_CODE,
  SET_SELECTED_LANGUAGE,
  SET_SOURCE,
  SET_STDIN,
  SET_STDOUT,
  SET_STUBS,
  SET_LANGUAGES,
  SET_SELECTED_LANGUAGE_BY_ID,
} from '~/store/action-types/editor';
import { listToMap } from '~/utils/store';

export interface Language {
  id: number;
  name: number;
}

export interface EditorState {
  selectedLanguage: Language | null;
  sourceLanguageMap: { [key: number]: string };
  stdin: string;
  stdout: string;
  returnCode: number;
  languages: { [id: number]: Language };
}

const initialState: EditorState = {
  selectedLanguage: null,
  sourceLanguageMap: {},
  stdin: '',
  stdout: '',
  returnCode: null,
  languages: {},
};

export const editorReducer = (state: EditorState = initialState, action): EditorState => {
  switch (action.type) {
    case SET_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };
    case SET_STUBS:
      return {
        ...state,
        sourceLanguageMap: action.payload,
      };
    case SET_SOURCE:
      return {
        ...state,
        sourceLanguageMap: {
          ...state.sourceLanguageMap,
          [state.selectedLanguage.id]: action.payload,
        },
      };
    case SET_STDOUT:
      return {
        ...state,
        stdout: action.payload,
      };
    case SET_RETURN_CODE:
      return {
        ...state,
        returnCode: action.payload,
      };
    case SET_STDIN:
      return {
        ...state,
        stdin: action.payload,
      };
    case SET_LANGUAGES:
      return {
        ...state,
        languages: listToMap(action.payload),
        // Set default language when no language is selected.
        ...(!state.selectedLanguage
          ? {
              selectedLanguage: action.payload[0],
            }
          : {}),
      };
    case SET_SELECTED_LANGUAGE_BY_ID:
      return {
        ...state,
        selectedLanguage: state.languages[action.payload],
      };
    default:
      return state;
  }
};
