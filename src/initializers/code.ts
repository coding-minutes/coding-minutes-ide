import { Dispatch } from 'redux';
import { getCodeById } from '~/services/ide';
import { setSource, setStdin, setSelectedLanguage, setLanguageById } from '~/store/action/editor';

export async function fetchCodeFromIdParam(dispatch: Dispatch) {
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  if (!id) {
    return;
  }

  try {
    const response = await getCodeById(id);
    const { data } = response;
    const source = atob(data.source);
    dispatch(setLanguageById(data.lang));
    dispatch(setSource(source));
    dispatch(setStdin(data.input));
  } catch (error) {
    console.error('Fetch code error = ', error);
  }
}
