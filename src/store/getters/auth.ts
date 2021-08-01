export const getUser = () => (state) => state.auth.user;
export const getIsLoggedIn = () => (state) => state.auth.isLoggedIn;
export const getJwt = () => (state) => state.auth.jwt;
