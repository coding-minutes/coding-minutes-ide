import Api from './api';
const BASE_URL = '/auth';

export async function loginWithToken(token: string) {
  const response = await Api.post(`${BASE_URL}/login`, { token });
  return response.data;
}

export async function verifyToken() {
  const response = await Api.post(`${BASE_URL}/verify`);
  return response;
}

export async function githubLoginWithCode(code: string) {
  const response = await Api.post(`${BASE_URL}/login`, { code, strategy: "github" })
  return response.data;
}
