import axios from 'axios';

// URL base da API do TMDb
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'S10b7e9b3d1eb34c0853c33706ef8a4c5', // Substitua pela sua chave da API do TMDb
    language: 'pt-BR',          // Idioma
  },
});

export default api;
