export const CHANGE_FORM_FIELD = 'CHANGE_FORM_FIELD';
export const SUBMIT_FORM = 'SUBMIT_FORM';
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

export const actionSubmitForm = () => ({
  type: SUBMIT_FORM,
});

/**
 * Demande au reducer user de sauvegarder l'utilisateur actuel
 * @param {String} name le nom du user
 * @param {String} firstname le prenom de connection
 * @param {String} email le email de connection
 * @param {String} pseudo le pseudo de connection
 * @param {String} address l'adresse de connection
 * @param {String} zipcode le zipcode de connection
 * @param {String} path le urlimage de connection
 * @returns
 */
export const actionSaveUser = (name, firstname, email, pseudo, address, zipcode, path ) => ({
  type: SAVE_USER,
  payload: {
    name, firstname, email, pseudo, address, zipcode, path
  },
});

/*pour info a supr si tout est ok  @param {boolean} logged le boolean pour dire qu'il est connecté */