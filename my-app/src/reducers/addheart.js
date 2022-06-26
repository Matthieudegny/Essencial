import { SUBMIT_FRIEND, SAVE_FRIEND } from '../actions/addfriend';

export const initialState = {
  id:'',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_FRIEND:
      return {
        ...state,
        
      };

    case SAVE_FRIEND:
      return {
        ...state,
        // on est amis donc on sauvegarde les infos 
        id: action.payload.id,
        
      };


    default:
      return state;
  }
};

export default reducer;
