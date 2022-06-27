export const CHANGE_FORM_FIELD_VILLAGE = 'CHANGE_FORM_FIELD_VILLAGE';
export const SUBMIT_FORM_VILLAGE = 'SUBMIT_FORM_VILLAGE';
export const SAVE_VILLAGE = 'SAVE_VILLAGE';


/**
 * action pour demander à changer lVILLAGEaleur de mon formulaire FORM
 * @param {String} value la valeur de notre input
 * @param {String} inputName le nom de mon input (email|password)
 * @returns
 */
export const actionChangeFormFieldVillage = (value, inputName) => ({
  type: CHANGE_FORM_FIELD_VILLAGE,
  payload: {
    value, inputName,
  },
});

export const actionSubmitFormVillage = () => ({
  type: SUBMIT_FORM_VILLAGE,
});


/**
 * Demande au reducer user de sauvegarder l'utilisateur actuel
 * @param {String} name nom de l'ecovillage
 * @param {String} path l'url-image de connection
 * @param {String} description description de l'éco-village
 * @param {String} website le site du village
 * @param {String} address l'adresse de connection
 * @param {String} zip_code le zipcode de connection
 * @param {String} city le zipcode de connection
 * @param {String} region l'adresse de connection
 * @param {String} last_name_manager le nom du manager
 * @param {String} first_name_manager le prenom du manager
 * @param {String} date_of_birth_manager la date de naissance du manager
 * @param {String} phone_number le numéro de téléphone
 * @param {String} email le email de connection
 * @param {String} password le pseudo de connection
 * @returns
 */
export const actionSaveVillage = (name, path, description, website, address, zip_code, city, region, last_name_manager, first_name_manager, date_of_birth_manager, phone_number, email, password) => ({
  type: SAVE_VILLAGE,
  payload: {
    name, path, description, website, address, zip_code, city, region, last_name_manager, first_name_manager, date_of_birth_manager, phone_number, email, password
  },
});
