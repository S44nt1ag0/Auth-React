import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3010",
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (email, senha) => {
    try {
        const response = await api.post('/auth', { email, senha });
        return response.data;
    } catch(err) {
        throw err;
    }
}
