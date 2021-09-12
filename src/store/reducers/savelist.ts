import {
  SET_SAVELIST,
  SET_CURRENT_PAGE,
  CLEAR_SAVELIST,
  SET_PAGE_METADATA,
} from '../action-types/savelist';

export interface Codefile {
  source: string;
  lang: number;
  user_email: string;
  id: string;
  input: string;
  title: string;
}

export interface SavelistState {
  page: number;
  codes: Codefile[];
  count: number;
  next: number | null;
  previous: number | null;
  total_pages: number;
}

const initialState: SavelistState = {
  page: 1,
  codes: [],
  count: 0,
  next: null,
  previous: null,
  total_pages: 0,
};

export const savelistReducer = (state: SavelistState = initialState, action): SavelistState => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_SAVELIST:
      return {
        ...state,
        codes: action.payload,
      };
    case SET_PAGE_METADATA:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_SAVELIST:
      return initialState;

    default:
      return state;
  }
};
