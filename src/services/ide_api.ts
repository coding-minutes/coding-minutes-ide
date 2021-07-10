import axios from 'axios';
import Config from '~/config';

const client = axios.create({
  baseURL: Config.API.HOST + '/api/codes',
  responseType: 'json',
});

export default client;
