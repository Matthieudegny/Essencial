import { CHANGE_FORM_FIELD, SAVE_USER } from '../actions/inscription';

export const initialState = {
  name: 'durand',
  firstname: 'gaston',
  email: 'gaston@laposte.net',
  pseudo: 'gastondelaposte',
  password: 'test',
  address: 'rue de la poste',
  zip_code: '67000',
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

    case SAVE_USER:
      return {
        ...state,
        // on est inscrit donc on sauvegarde les infos du formulaire     
        name: action.payload.name,
        firstname: action.payload.firstname,
        email: action.payload.email,
        pseudo: action.payload.pseudo,
        password: action.payload.mot_de_passe,
        address: action.payload.address,
        zip_code: action.payload.zip_code,
        path: action.payload.path,

      };


    default:
      return state;
  }
};

export default reducer;
