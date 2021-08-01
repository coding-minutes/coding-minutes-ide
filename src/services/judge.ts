import Api from './api';
const BASE_URL = '/judge';

export async function getLanguages() {
  return Api.get(`${BASE_URL}/languages`);
}

export async function getSubmission(submissionId: string) {
  return Api.get(`${BASE_URL}/submissions/${submissionId}`);
}

export async function runCode(data: { source_code; language_id; stdin }) {
  return Api.post(`${BASE_URL}/run`, data);
}

export async function getStubs() {
  return Api.get(`${BASE_URL}/stubs`);
}
