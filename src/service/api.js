import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://us-central1-labenu-apis.cloudfunctions.net/eloFourTwo/products',
});

export default api;
