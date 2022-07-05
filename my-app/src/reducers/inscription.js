import { CHANGE_FORM_FIELD, SAVE_USER } from '../actions/inscription';

export const initialState = {
  last_name: '',
  first_name: '',
  email: '',
  pseudo: '',
  password: '',
  address: '',
  zip_code: '',
  city: '',
  region: '',
  path: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FORM_FIELD:
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
        // on est inscrit donc on sauvegarde les infos du formulaire 
        last_name: action.payload.last_name,
        first_name: action.payload.first_name,
        email: action.payload.email,
        pseudo: action.payload.pseudo,
        password: action.payload.password,
        address: action.payload.address,
        zip_code: action.payload.zip_code,
        city: action.payload.city,
        region: action.payload.region,
        path: action.payload.path,

      };


    default:
      return state;
  }
};

export default reducer;
