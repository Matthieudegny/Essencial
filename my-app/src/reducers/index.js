import { combineReducers } from 'redux';
import inscriptionReducer from './inscription';
import inscriptionVillageReducer from'./inscriptionvillage';
import userReducer from './user';
import addPostReducer from './addpost';
import allUserReducer from './allUsers';
import allPostsReducer from './allposts';


const rootReducer = combineReducers({
  inscription: inscriptionReducer,
  inscriptionvillage : inscriptionVillageReducer,
  user: userReducer,
  addpost: addPostReducer,
  allUsers : allUserReducer,
  allposts : allPostsReducer,
});

export default rootReducer;