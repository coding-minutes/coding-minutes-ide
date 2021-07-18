import { Dispatch } from 'redux';
import { getCodeById } from '~/services/ide';
import { setSource, setStdin, setSelectedLanguage } from '~/store/action/editor';

export function fetchCodeFromIdParam(dispatch: Dispatch) {
  async function fetchCode(id: string) {
    try {
      const response = await getCodeById(id);

      const { data } = response;
      const lang = JSON.parse(data.lang);
      const source = atob(data.source);
      dispatch(setSelectedLanguage(lang));
      dispatch(setSource(source));
      dispatch(setStdin(data.input));
    } catch (error) {
      console.error('Fetch code error = ', error);
    }
  }
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  if (!id) {
    return;
  }

  fetchCode(id);
}
