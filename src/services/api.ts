import axios from 'axios';
import Config from '~/config';
import { getJwt } from '~/utils/jwt';

const client = axios.create({
  baseURL: Config.API.HOST + '/api',
  responseType: 'json',
});

client.interceptors.request.use(
  (request) => {
    const token = getJwt();
    if (token) request.headers['Authorization'] = `JWT ${token}`;
    return request;
  },
  (error) => {
    console.error(error);
  },
);

export default client;
