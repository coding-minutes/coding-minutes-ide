const TOKEN = 'coding-minutes-auth-jwt';

export function getJwt() {
  return localStorage.getItem(TOKEN);
}

export function setJwt(jwt: string) {
  localStorage.setItem(TOKEN, jwt);
}

export function clearJwt() {
  localStorage.removeItem(TOKEN);
}
