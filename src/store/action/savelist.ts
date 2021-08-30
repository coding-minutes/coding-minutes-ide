import {
  SET_CURRENT_PAGE,
  SET_SAVELIST,
  CLEAR_SAVELIST,
  SET_PAGE_METADATA,
} from '../action-types/savelist';
import { Codefile } from '../reducers/savelist';

export const setCurrentPage = (page: number = 1) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const updateSavelist = (codes: Array<Codefile>) => ({
  type: SET_SAVELIST,
  payload: codes,
});

export const setPageMetaData = (
  count: number,
  next: number | null,
  previous: number | null,
  total_pages: number,
) => ({
  type: SET_PAGE_METADATA,
  payload: {
    count,
    next,
    previous,
    total_pages,
  },
});

export const clearSavelist = () => ({
  type: CLEAR_SAVELIST,
});
