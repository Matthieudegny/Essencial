import { SAVE_ALL_USERS, SAVE_ALL_VILLAGES, SAVE_ALL_FRIENDS } from '../actions/getAll';

export const initialState = {
  allUsers : [],
  allVillages : [],
  allFriends : []
};

const reducer = (state = initialState, action = {}) => {
  //console.log(state,'log du reducer user');//ici le state est ok 
  switch (action.type) {
    case SAVE_ALL_USERS:
    
      return {
        ...state,
        allUsers : action.payload,
      };

    case SAVE_ALL_VILLAGES:
  
      return {
        ...state,
        allVillages : action.payload,
      };

    case SAVE_ALL_FRIENDS:
  
      return {
        ...state,
        allFriends : action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
