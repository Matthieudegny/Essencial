
import {SUBMIT_FORM, actionSaveUser /* SAVE_USER, */} from '../../actions/inscription';
import {requestInscriptionForm /* saveAuthorization, */ } from '../../requests/';

const inscriptionMiddleware = (store) => (next) => async (action) => {
 switch (action.type) {
   case SUBMIT_FORM: {
     // on intercepte mon action SUBMIT_FORM
     console.log("loginMiddleware j'ai intercepté SUBMIT_FORM");
     

     const state = store.getState();
     console.log(store.getState(),'stateinscription')
     //je recupere mon state dans le reducer .inscription 
    console.log('logstate.inscription',state.inscription);
     const { last_name, first_name, email, pseudo, description, password, address, region, zip_code, city, path} = state.inscription;
     
     //test
    
     console.log('je fait mon getState pour recuperer', { last_name, first_name, email, pseudo, description, password, address, region, zip_code, city, path});

     try {
       // on execute la requete POST /createUser
         console.log('je lance ma requete create user');


         const { user, photo} = await requestInscriptionForm( last_name, first_name, email, pseudo, description, password, address, region, zip_code, city, path );
         console.log("la requete est terminé et j'ai récupéré:", { user,photo});


         console.log("je dispatch SAVE_USER avec les infos de l'utilisateur connecté");
         store.dispatch(
           actionSaveUser( last_name, first_name, email, pseudo, description, password, address, region, zip_code, city, path),
         );
       }
       catch (err) {
       // on capture les eventuelles erreur de la requete
         console.error(err);
       }

 
     return; // on bloque mon action SUBMIT_LOGIN pour ne pas l'envoyer aux reducers
   }

   default:
     next(action); // pour dire à redux qu'il peut passer aux middlewares suivant, puis aux reducers
 }
};

export default inscriptionMiddleware;