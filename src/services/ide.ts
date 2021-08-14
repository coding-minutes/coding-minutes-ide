import Api from './api';
import useSWR from 'swr';
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

export async function getSavedCodes(page: number = 1, query = '') {
  const { data } = useSWR(`${BASE_URL}/saved?page=${page}&query=${query}`, (url) => Api.get(url));
  return data;
}
