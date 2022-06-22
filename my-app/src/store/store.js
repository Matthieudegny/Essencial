import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import loginMiddleware from './middlewares/loginMiddleware';
import inscriptionMiddleware from './middlewares/inscriptionMiddleware';
import addpostMiddleware from './middlewares/addpostMiddleware';
import allUsersMiddleware from './middlewares/allUsersMiddelware'
import inscriptionVillageMiddleware from './middlewares/inscriptionVillageMiddleware';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(

 applyMiddleware(loginMiddleware, inscriptionMiddleware, inscriptionVillageMiddleware, addpostMiddleware, allUsersMiddleware),
);

const store = createStore(reducer, enhancers);
//console.log(store.getState(),' mon store')


export default store;



