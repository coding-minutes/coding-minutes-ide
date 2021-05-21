import { SET_RETURN_CODE, SET_SELECTED_LANGUAGE, SET_SOURCE, SET_STDOUT } from "~/store/action-types/editor";


export interface Language {
  id: number;
  name: number;
}

export interface EditorState {
  selectedLanguage: Language | null;
  source: string;
  stdin: string;
  stdout: string;
  return_code: number;
}

const initialState: EditorState = {
  selectedLanguage: null,
  source: '',
  stdin: ' ',
  stdout: '',
  return_code: null,
};

export const editorReducer = (state: EditorState = initialState, action): EditorState => {
  switch (action.type) {
    case SET_SELECTED_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload
      }
    case SET_SOURCE:
      return {
        ...state,
        source: action.payload
      }
    case SET_STDOUT:
      return {
        ...state,
        stdout: action.payload
      }
    case SET_RETURN_CODE:
      return {
        ...state,
        stdout: action.payload
      }
    default:
      return state;
  }
};
