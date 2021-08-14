import { getSavedCodes } from '~/services/ide';
import { Dispatch } from 'redux';
import { setCurrentPage, updateSavelist, setPageMetaData } from '~/store/action/savelist';

export async function fetchSavedCodes(dispatch: Dispatch, page: number = 1, query = '') {
  const response = (await getSavedCodes(page, query))?.data;

  //   console.log(response);

  dispatch(setCurrentPage(page));
  dispatch(updateSavelist(response.data));
  dispatch(setPageMetaData(response.count, response.next, response.previous, response.total_pages));
}
