import axios from 'axios';
import Config from '~/config';

const client = axios.create({
  baseURL: Config.API.HOST + '/api/judge',
  responseType: 'json',
});

export default client;
