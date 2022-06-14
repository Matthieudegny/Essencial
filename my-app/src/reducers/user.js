import { CHANGE_LOGIN_FIELD, LOGOUT, SAVE_USER } from '../actions/user';

export const initialState = {
  email: 'bouclierman@herocorp.io', // '',
  password: 'jennifer', // '',
  isLogged: false,
  pseudo: '',
  token: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case CHANGE_LOGIN_FIELD:
    //   return {
    //     ...state,
    //     [action.payload.inputName]: action.payload.value,
    //     // quand action.payload.inputName="email"
    //     // email: action.payload.value
    //     // sans les crochet ca met literallement le nom de ta variable exemple: {"action.payload.inputName": value}
    //   };

    case SAVE_USER:
      return {
        ...state,
        // on est connecté donc on sauvegarde le pseudo, et on met isLogged=true
        isLogged: true,
        pseudo: action.payload.pseudo,
        token: action.payload.token,
        password: '', // on vide le password on a plus besoin de le sauvegarder (SECURITE)
      };

    // case LOGOUT:
    //   return {
    //     ...state,
    //     isLogged: false,
    //     pseudo: '',
    //     token: null,
    //     email: '',
    //   };
    default:
      return state;
  }
};

export default reducer;
