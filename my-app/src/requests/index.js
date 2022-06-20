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
  axiosInstance.defaults.headers.common.Authorization = `jwt ${token}`;
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

// ici ma requete pour le login 

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

// ici ma requete pour le formulaire d'inscription

export async function requestInscriptionForm(last_name, first_name, email, pseudo, password, address,region, zip_code, city, path) {
  // on utilise notre instance personnalisé de axios, donc on a pas besoin
  // de preciser la baseURL ("http://localhost:3001")
  //console.log("je me connecte à l'API d'Arthur 'https://essencial-api.herokuapp.com' ");
 /*  console.log('LOGDEBUG',{
    //paramétrage du CORS object dans post -> 
    last_name,
    first_name,
    email,
    pseudo,
    password,
    address,
    region,
    zip_code,
    city,
    path,
  }); */
  const response = await axiosInstance.post('/api/user/create', {
    //paramétrage du CORS object dans post -> 
    last_name,
    first_name,
    email,
    pseudo,
    password,
    address,
    region,
    zip_code,
    city,
    path,
  });
  console.log(response)
  return response.data;
}

// ici ma requête pour ajouter un éco-village

export async function requestInscriptionFormVillage(last_name_manager, first_name_manager, date_of_birth_manager, description, website, phone_number, name, email, password, address, region, zip_code, city, path) {
  // on utilise notre instance personnalisé de axios, donc on a pas besoin
  // de preciser la baseURL ("http://localhost:3001")
  //console.log("je me connecte à l'API d'Arthur 'https://essencial-api.herokuapp.com' ");
 /*  console.log('LOGDEBUG',{
    //paramétrage du CORS object dans post -> 
    last_name,
    first_name,
    email,
    pseudo,
    password,
    address,
    region,
    zip_code,
    city,
    path,
  }); */
  const response = await axiosInstance.post('/api/ecovillage/create', {
    //paramétrage du CORS object dans post -> 
    last_name_manager,
    first_name_manager,
    date_of_birth_manager,
    description,
    website,
    phone_number,
    name,
    email,
    password,
    address,
    region,
    zip_code,
    city,
    path,
  });
  console.log(response)
  return response.data;
}

// ici ma requete pour ajouter un post 

export async function requestAddPost( title, content, path) {
  // on utilise notre instance personnalisé de axios, donc on a pas besoin
  // de preciser la baseURL ("http://localhost:3001")
  //console.log("je me connecte à l'API d'Arthur 'https://essencial-api.herokuapp.com' ");
  const response = await axiosInstance.post('/api/post/create', {
    //paramétrage du CORS object dans post -> 
    title,
    content,
    path,
  });
  console.log(response)
  return response.data;

}
