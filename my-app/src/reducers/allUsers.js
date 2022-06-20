import { SAVE_ALL_USERS } from '../actions/getAll';

export const initialState = {
  allUsers : ['']
};

const reducer = (state = initialState, action = {}) => {
  //console.log(state,'log du reducer user');//ici le state est ok 
  switch (action.type) {
    case SAVE_ALL_USERS:
      return {
        ...state,
        allUsers : action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
