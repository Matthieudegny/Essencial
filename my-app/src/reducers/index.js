import { combineReducers } from 'redux';
import inscriptionReducer from './inscription';
import inscriptionVillageReducer from'./inscriptionvillage';
import userReducer from './user';
import addPostReducer from './addpost';

const rootReducer = combineReducers({
  inscription: inscriptionReducer,
  inscriptionvillage : inscriptionVillageReducer,
  user: userReducer,
  addpost: addPostReducer,
});

export default rootReducer;