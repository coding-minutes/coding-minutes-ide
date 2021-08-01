import { Dispatch } from 'redux';
import { getStubs } from '~/services/judge';
import { setCodeStubs } from '~/store/action/editor';

export const loadStubs = async (dispatch: Dispatch) => {
  const response: any = await getStubs();

  dispatch(setCodeStubs(response.data.data));
};
