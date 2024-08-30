import axios from 'axios';

// Criação da instância Axios
const api = axios.create({
  baseURL: 'http://localhost:3010',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const SetAuthToken = token => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `${token}`;
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
};

export const verify = async () => {
    try {
        const resposta = await api.get('/verify');
        return resposta;
    } catch (err) {
        throw err;
    }
};