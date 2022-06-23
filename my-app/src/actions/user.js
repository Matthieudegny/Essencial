export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const GET_TOKEN = 'GET_TOKEN';
export const LOGOUT = 'LOGOUT';
export const GET_INFOS = 'GET_INFOS';
export const GET_SAVE_INFOS = 'GET_SAVE_INFOS';
export const SAVE_VILLAGE = 'SAVE_VILLAGE';
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
 * @param {String} name le name de eco-village
 * @param {String} token le token de connection
 * @returns
 */
export const actionSaveUser = (pseudo, token) => ({
  type: SAVE_USER,
  payload: {
    pseudo, token,
  },
});

export const actionSaveVillage = (name, token) => ({
  type : SAVE_VILLAGE,
  payload: {
    name, token,
  },
});

export const actionLogout = () => ({ 
  type: LOGOUT



});

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
