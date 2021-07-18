import { saveCode, updateCode } from '~/services/ide';

interface codeData {
  lang: string;
  source: string;
  input: string;
}

export async function saveUpdateCode(data: codeData, id?: string) {
  data.source = btoa(data.source);
  if (!id) {
    // This is a fresh code. Save it as new.
    try {
      const response = await saveCode(data);
      const { id } = response.data;
      return {
        id,
      };
    } catch (error) {
      console.error(error);
    }
  } else {
    // This is a previously saved code as the ID exists. The user wants to update this.
    try {
      const response = await updateCode(id, data);
      const newId = response.data.id;

      return {
        id: newId,
      };
    } catch (error) {
      console.error(error);
    }
  }
}
