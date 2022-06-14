/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// on créer une instance de axios avec des parametres par defaut
// comme ca, à chaque futur requete on a pas besoin de repeter certaine info
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

export function saveAuthorization(token) {
  // on va modifier les valeurs par defaut de notre instance axios pour sauvegarder le token
  axiosInstance.defaults.headers.common.Authorization = `bearer ${token}`;
}

export function removeAuthorization() {
  // on supprime le token par defaut de notre instance
  axiosInstance.defaults.headers.common.Authorization = '';
}
/* 
export async function requestRecipesList() {
  const response = await axiosInstance.get('/recipes');
  return response.data;
} */

export async function requestLogin(email, password) {
  // on utilise notre instance personnalisé de axios, donc on a pas besoin
  // de preciser la baseURL ("http://localhost:3001")
  const response = await axiosInstance.post('/login', {
    email, password,
  });
  return response.data;
}

export async function requestFavorites() {
  // ici l'instance axios connait la baseURL, et connais le header authorization,
  // donc il n'est pas necessaire de redonner le token
  const response = await axiosInstance.get('/favorites');
  return response.data;
}
