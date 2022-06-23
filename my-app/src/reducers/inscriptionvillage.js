import { SAVE_VILLAGE, CHANGE_FORM_FIELD_VILLAGE } from '../actions/inscriptionvillage';

export const initialState = {
  name: 'VIllage essencial',
  path: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1189.jpg',
  description: 'lorem ipsum et taratata turlututu ',
  website: 'essencial.com',
  address: 'rue de la poste',
  zip_code: '67000',
  city: 'Miami',
  region: 'Elsass',
  last_name_manager: '',
  first_name_manager: 'alain',
  date_of_birth_manager: '01/06/2022',
  phone_number: '0707070707',
  email: 'ginette@laposte.net',
  password: 'test',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FORM_FIELD_VILLAGE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.value,
        // quand action.payload.inputName="email"
        // email: action.payload.value
        // sans les crochet ca met literallement le nom de ta variable exemple: {"action.payload.inputName": value}
      };

    case SAVE_VILLAGE:
      return {
        ...state,
        // on est inscrit donc on sauvegarde les infos du formulaire 
        name: action.payload.name,
        path: action.payload.path,
        description: action.payload.description,
        website: action.payload.website,
        address: action.payload.address,
        zip_code: action.payload.zip_code,
        city: action.payload.city,
        region: action.payload.region,
        last_name_manager: action.payload.last_name_manager,
        first_name_manager: action.payload.first_name_manager,
        date_of_birth_manager: action.payload.date_of_birth_manager,
        phone_number: action.payload.phone_number,
        email: action.payload.email,
        password: action.payload.password,
      };


    default:
      return state;
  }
};

export default reducer;
