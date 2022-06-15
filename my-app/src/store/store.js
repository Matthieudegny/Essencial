import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import loginMiddleware from './middlewares/loginMiddleware';
import inscriptionMiddleware from './middlewares/inscriptionMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(loginMiddleware, inscriptionMiddleware),
);

const store = createStore(reducer, enhancers);


export default store;



