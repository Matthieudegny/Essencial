export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const GET_TOKEN = 'GET_TOKEN';
export const LOGOUT = 'LOGOUT';
export const GET_INFOS = 'GET_INFOS';
export const GET_SAVE_INFOS = 'GET_SAVE_INFOS';
/**
 * action pour demander à changer les valeur de mon formulaire login
 * @param {String} value la valeur de notre input
 * @param {String} inputName le nom de mon input (email|password)
 * @returns
 */
export const actionChangeLoginField = (value, inputName) => ({
  type: CHANGE_LOGIN_FIELD,
  payload: {
    value, inputName,
  },
});

export const actionSubmitLogin = () => ({
  type: SUBMIT_LOGIN,
});

/**
 * Demande au reducer user de sauvegarder l'utilisateur actuel
 * @param {boolean} logged le boolean pour dire qu'il est connecté
 * @param {String} pseudo le pseudo du user
 * @param {String} token le token de connection
 * @returns
 */
export const actionSaveUser = (pseudo, token) => ({
  type: SAVE_USER,
  payload: {
    pseudo, token,
  },
});

export const actionLogout = () => ({ type: LOGOUT });

export const actiongetinfos = (id,type) => ({
  type: GET_INFOS,
  payload:{
    id, type
  }
})

export const actionSaveInfoForGetInStore = (data) => ({
  type: GET_SAVE_INFOS,
  payload:{
    data,
  }
})

/* address: "933 Voie de la Pompe"
city: "La Seyne-sur-Mer"
date_of_birth: "1977-07-18T20:31:05.469Z"
description: null
email: "Matthias27@gmail.com"
first_name: "Matthias"
last_name: "Jacquet"
path: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/917.jpg"
phone_number: "0664676766"
pseudo: "Matthias69"
region: "Provence-Alpes-Côte d'Azur"
zip_code: "13861"
 */