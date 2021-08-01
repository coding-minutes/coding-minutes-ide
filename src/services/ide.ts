import Api from './api';
const BASE_URL = '/code';

export function saveCode(data) {
  return Api.post(`${BASE_URL}/`, data);
}

export async function getCodeById(id: string) {
  return Api.get(`${BASE_URL}/${id}`);
}

export async function updateCode(id: string, data) {
  return Api.patch(`${BASE_URL}/${id}`, data);
}
