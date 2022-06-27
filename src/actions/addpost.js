export const CHANGE_FORM_FIELD = 'CHANGE_FORM_FIELD';
export const SUBMIT_POST = 'SUBMIT_POST';
export const SAVE_POST = 'SAVE_POST';
export const SAVE_USER = 'SAVE_USER';

/**
 * action pour demander à changer les valeur de mon formulaire FORM
 * @param {String} value la valeur de notre input
 * @param {String} inputName le nom de mon input (email|password)
 * @returns
 */
export const actionChangeFormField = (value, inputName) => ({
  type: CHANGE_FORM_FIELD,
  payload: {
    value, inputName,
  },
});

export const actionSubmitPost = () => ({
  type: SUBMIT_POST,
});

/**
 * Demande au reducer user de sauvegarder le post actuel
 * @param {String} title le titre du post
 * @param {String} content le texte du post
 * @param {String} path l'url de l'image du post
 * @param {String} category_1 l'url de l'image du post
 * @param {String} category_2 l'url de l'image du post
 * @returns
 */
//sauvergarde l'utilisateur 
 export const actionSaveUser = (pseudo, token) => ({
  type: SAVE_USER,
  payload: {
    pseudo, token,
  },
});
// sauvegarde le post
export const actionSavePost = (title, content, path, category_1, category_2 ) => ({
  type: SAVE_POST,
  payload: {
    title, content, path, category_1, category_2
  },
});
