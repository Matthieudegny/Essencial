import { combineReducers } from 'redux';
import inscriptionReducer from './inscription';
import userReducer from './user';
import addPostReducer from './addpost';

const rootReducer = combineReducers({
  inscription: inscriptionReducer,
  user: userReducer,
  addpost: addPostReducer,
});

export default rootReducer;