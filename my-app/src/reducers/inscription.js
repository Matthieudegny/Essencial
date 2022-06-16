import { CHANGE_LOGIN_FIELD, SAVE_USER } from '../actions/inscription';

export const initialState = {
    nom: '',
    prenom:'',
    email: '',
    pseudo:'',
    mot_de_passe:'',
    adresse:'',
    zip_code:'',
    region:'',
    url_image:'',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.payload.inputName]: action.payload.value,
      };

      case SAVE_USER:
        return {
          ...state,
          // on est connecté donc on sauvegarde le pseudo, et on met isLogged=true
          isLogged: true,
          pseudo: action.payload.pseudo,
          token: action.payload.token,
          password: '', // on vide le password on a plus besoin de le sauvegarder (SECURITE)
        };


    default:
      return state;
  }
};

export default reducer;
