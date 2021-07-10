import { Dispatch } from 'redux';

import api from '~/services/judge_api';
import { setCodeStubs } from '~/store/action/editor';

export const loadStubs = async (dispatch: Dispatch) => {
  const response: any = await api.get('stubs');

  dispatch(setCodeStubs(response.data.data));
};
