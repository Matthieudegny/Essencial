export const SUBMIT_FRIEND = 'SUBMIT_FRIEND';
export const SAVE_FRIEND = 'SAVE_FRIEND';


export const actionSubmitFriend = (id) => ({
  type: SUBMIT_FRIEND,
  id,
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
//sauvergarde l'ajout de l'ami 
 export const actionSaveFriend = (id, token) => ({
  type: SAVE_FRIEND,
  payload: {
    id, token,
  },
});

