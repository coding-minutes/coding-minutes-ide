import { getSavedCodes } from '~/services/ide';
import { Dispatch } from 'redux';
import { setCurrentPage, updateSavelist, setPageMetaData } from '~/store/action/savelist';

export async function fetchSavedCodes(dispatch: Dispatch, page: number = 1, query = '') {
  const response = await getSavedCodes(page, query);
  if (response?.data) {
    const data = response.data;

    dispatch(setCurrentPage(page));
    dispatch(updateSavelist(data.data));
    dispatch(setPageMetaData(data.count, data.next, data.previous, data.total_pages));
  }
}
