import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import loginMiddleware from './middlewares/loginMiddleware';
import inscriptionMiddleware from './middlewares/inscriptionMiddleware';
import addpostMiddleware from './middlewares/addpostMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(loginMiddleware, inscriptionMiddleware, addpostMiddleware),
);

const store = createStore(reducer, enhancers);
console.log(store.getState(),' mon store')

export default store;



