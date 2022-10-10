import axios from 'axios';

const instance = axios.create({
  baseURL: `http://${window.location.hostname}:3333`,
});

export default instance;
