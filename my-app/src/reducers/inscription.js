import { CHANGE_FORM_FIELD, SAVE_USER } from '../actions/inscription';

export const initialState = {
  name: 'VIllage essencial',
  last_name_manager: 'durand',
  first_name_manager: 'ginette',
  last_name: 'durand',
  description:'lorem ipsum et taratata turlututu ',
  first_name: 'ginette',
  date_of_birth_manager:'01/06/2022',
  email: 'ginette@laposte.net',
  phone_number: '07.07.07.07.07',
  website: 'essencial.com',
  pseudo: 'ginettelaposte',
  password: 'test',
  address: 'rue de la poste',
  region: 'Elsass',
  city: 'Miami',
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
        last_name_manager: action.payload.last_name_manager,   
        first_name_manager: action.payload.first_name_manager,
        date_of_birth_manager: action.payload.date_of_birth_manager,
        website: action.payload.website,
        phone_number:action.payload.phone_number,
        last_name: action.payload.last_name,
        first_name: action.payload.first_name,
        name: action.payload.name,
        description: action.payload.description,
        email: action.payload.email,
        pseudo: action.payload.pseudo,
        password: action.payload.password,
        address: action.payload.address,
        region: action.payload.region,
        zip_code: action.payload.zip_code,
        city: action.payload.city,
        path: action.payload.path,

      };


    default:
      return state;
  }
};

export default reducer;
