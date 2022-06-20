import { combineReducers } from 'redux';
import inscriptionReducer from './inscription';
import userReducer from './user';
import addPostReducer from './addpost';
import allUserReducer from './allUsers'

const rootReducer = combineReducers({
  inscription: inscriptionReducer,
  user: userReducer,
  addpost: addPostReducer,
  allUsers : allUserReducer,
});

export default rootReducer;