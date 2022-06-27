import { combineReducers } from 'redux';
import inscriptionReducer from './inscription';
import inscriptionVillageReducer from'./inscriptionvillage';
import userReducer from './user';
import addPostReducer from './addpost';
import allUserReducer from './allUsers';
import updateReducer from './updateReducer'
import allPostsReducer from './allposts';
import addheart from './addheart'


const rootReducer = combineReducers({
  inscription: inscriptionReducer,
  inscriptionvillage : inscriptionVillageReducer,
  user: userReducer,
  addpost: addPostReducer,
  allUsers : allUserReducer,
  updateReducer: updateReducer,
  allposts : allPostsReducer,
  addheart : addheart,
});

export default rootReducer;