import { getSavedCodes } from '~/services/ide';
import { Dispatch } from 'redux';
import { setCurrentPage, updateSavelist, setPageMetaData } from '~/store/action/savelist';
import { batch } from 'react-redux';

export async function fetchSavedCodes(dispatch: Dispatch, page: number = 1, query = '') {
  const response = await getSavedCodes(page, query);
  if (response?.data) {
    const data = response.data;

    batch(() => {
      dispatch(setCurrentPage(page));
      dispatch(updateSavelist(data.data));
      dispatch(setPageMetaData(data.count, data.next, data.previous, data.total_pages));
    });
  }
}
