import { CHANGE_LOGIN_FIELD, LOGOUT, SAVE_USER, SAVE_VILLAGE, GET_SAVE_INFOS } from '../actions/user';

export const initialState = {
  email: '',
  password: '', // '',
  isLogged: false,
  pseudo: '',
  token: null,
};

const reducer = (state = initialState, action = {}) => {
  //console.log(state,'log du reducer user');//ici le state est ok 
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.payload.inputName]: action.payload.value,
            // quand action.payload.inputName="email"
            // email: action.payload.value
            // sans les crochet ca met literallement le nom de ta variable exemple: {"action.payload.inputName": value}
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

      case SAVE_VILLAGE:
        return {
          ...state,
          isLogged: true,
          email: action.payload.data.email,
          name: action.payload.name,
          token: action.payload.token,
          password: '',
        };

    case GET_SAVE_INFOS:
      console.log('blalbla',action.payload.data);
      return {
        ...state,
        isLogged: true,
        email: action.payload.data.email,
        pseudo:action.payload.data.pseudo,
        token: action.payload.data.token,
        name: action.payload.data.name,
      }

    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        pseudo: '',
        token: null,
        email: '',
      };
    default:
      return state;
  }
};

export default reducer;
