import { SUBMIT_FRIEND, SAVE_FRIEND } from '../actions/addfriend';

export const initialState = {
  
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
        // on est inscrit donc on sauvegarde les infos du formulaire     
        id: action.payload.id,
        
      };


    default:
      return state;
  }
};

export default reducer;
