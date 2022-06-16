/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// on créer une instance de axios avec des parametres par defaut
// comme ca, à chaque futur requete on a pas besoin de repeter certaine info
const axiosInstance = axios.create({
  //baseURL: 'http://localhost:3001',
  baseURL: 'https://essencial-api.herokuapp.com',
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
  //console.log("je me connecte à l'API d'Arthur 'https://essencial-api.herokuapp.com' ");
  // const response = await axiosInstance.post('/login', {
  //   email, password,
  // });
  const response = await axiosInstance.post('/api/user/connexion', {
    //paramétrage du CORS object dans post -> 
    //"email": "exemple@gmail.com", 
    //"password": "kldshfksh"
    email,
    password,
  });
  console.log(response)
  return response.data;
}

export async function requestInscriptionForm(name, firstname, email, pseudo, address, zip_code, path) {
  // on utilise notre instance personnalisé de axios, donc on a pas besoin
  // de preciser la baseURL ("http://localhost:3001")
  //console.log("je me connecte à l'API d'Arthur 'https://essencial-api.herokuapp.com' ");
  const response = await axiosInstance.post('/api/user/create', {
    //paramétrage du CORS object dans post -> 
    name,
    firstname,
    email,
    pseudo,
    address,
    zip_code,
    path,
  });
  console.log(response)
  return response.data;
}
