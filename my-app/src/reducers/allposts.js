import { SAVE_ALL_POSTS,SAVE_ALL_TUTOS} from '../actions/getallpost';

export const initialState = {
  allPosts : [],
  allTutos : [],
};

const reducer = (state = initialState, action = {}) => {
    //console.log(state,'log du reducer posts & tutos');//ici le state est ok 
    switch (action.type) {
      case SAVE_ALL_POSTS:
      
        return {
          ...state,
          allPosts : action.payload,
        };

        case SAVE_ALL_TUTOS:
  
      return {
        ...state,
        allTutos : action.payload,
      };

      default:
        return state;
    }
  };
  
  export default reducer;