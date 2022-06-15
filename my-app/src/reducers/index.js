import { combineReducers } from 'redux';

import inscriptionReducer from './inscription';
import userReducer from './user';

const rootReducer = combineReducers({
  inscription: inscriptionReducer,
  user: userReducer,
});

export default rootReducer;