export const CHANGE_FORM_FIELD = 'CHANGE_FORM_FIELD';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SAVE_USER = 'SAVE_USER';


/**
 * action pour demander à changer les valeur de mon formulaire FORM
 * @param {String} value la valeur de notre input
 * @param {String} inputName le nom de mon input (email|password)
 * @returns
 */
export const actionChangeFormField = (value, inputName) => {
  console.log("CHANGE_FORM_FIELD")
  return {
    type: CHANGE_FORM_FIELD,
    payload: {
      value, inputName,
    },
  }
}


//test
export const actionSubmitForm = () => ({
  type: SUBMIT_FORM,
});



/**
 * Demande au reducer user de sauvegarder l'utilisateur actuel
 * @param {String} last_name le nom du user
 * @param {String} first_name le prenom de connection
 * @param {String} email le email de connection
 * @param {String} pseudo le pseudo de connection
 * @param {String} description le pseudo de connection
 * @param {String} password le pseudo de connection
 * @param {String} address l'adresse de connection
 * @param {String} zip_code le zipcode de connection
 * @param {String} city le zipcode de connection
 * @param {String} region l'adresse de connection
 * @param {String} path l'url-image de connection
 * @returns
 */
export const actionSaveUser = (last_name, first_name, email, pseudo, description, password, address, zip_code, city, region, path ) => ({
  type: SAVE_USER,
  payload: {
    last_name, first_name, email, pseudo, description, password, address, zip_code, city, region, path },
});
