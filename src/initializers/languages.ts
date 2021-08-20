import { Dispatch } from 'redux';
import { getLanguages } from '~/services/judge';
import { setLanguages } from '~/store/action/editor';

export const loadLanguages = async (dispatch: Dispatch) => {
  const response: any = await getLanguages();

  dispatch(setLanguages(response.data.data));
};
