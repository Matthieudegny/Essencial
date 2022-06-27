import { SAVE_ALL_POSTS,SAVE_ALL_TUTOS} from '../actions/getallposts';

export const initialState = {
  allPosts : [],
  allTutos : [],
};

const reducer = (state = initialState, action = {}) => {
    //console.log(state,'log du reducer posts & tutos');//ici le state est ok 
    switch (action.type) {
      case SAVE_ALL_POSTS:
        //console.log("payload posts",action.payload);
        return {
          ...state,
          allPosts : action.payload,
        };

        case SAVE_ALL_TUTOS:
          //console.log("payload tutos",action.payload);
      return {
        ...state,
        allTutos : action.payload,
       
      };

      default:
        return state;
    }
  };
  
  export default reducer;