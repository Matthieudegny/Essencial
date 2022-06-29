import { CHANGE_FORM_FIELD, SAVE_POST, SAVE_USER } from '../actions/addpost';

export const initialState = {
  title: '',
  content: "",
  path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1189.jpg',
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

    case SAVE_POST:
      return {
        ...state,
        // on est inscrit donc on sauvegarde les infos du formulaire     
        title: action.payload.title,
        content: action.payload.content,
        path: action.payload.path,
        category_1: action.payload.category_1,
        category_2: action.payload.category_2,
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
