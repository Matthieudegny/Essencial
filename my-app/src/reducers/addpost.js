import { CHANGE_FORM_FIELD, SAVE_POST } from '../actions/addpost';

export const initialState = {
  title: 'Mon premier post',
  content: "Lorem Ipsum est simplement un faux texte de l'industrie de l'impression et de la composition. Le Lorem Ipsum est le texte factice standard de l'industrie depuis les années 1500, lorsqu'un imprimeur inconnu a pris une galère de caractères et l'a brouillé pour en faire un livre de spécimens de caractères.",
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

      };


    default:
      return state;
  }
};

export default reducer;
