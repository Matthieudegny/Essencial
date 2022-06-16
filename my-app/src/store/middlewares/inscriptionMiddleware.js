
import {SUBMIT_FORM, actionSaveUser /* SAVE_USER, */} from '../../actions/inscription';
import {requestInscriptionForm,  /* saveAuthorization, */ } from '../../requests/';

const inscriptionMiddleware = (store) => (next) => async (action) => {
 switch (action.type) {
   case SUBMIT_FORM: {
     // on intercepte mon action SUBMIT_FORM
     console.log("loginMiddleware j'ai intercepté SUBMIT_FORM");
     

     const state = store.getState();
     console.log(store.getState(),'stateinscription')
     //je recupere mon state dans le reducer .inscription 
     const { last_name, first_name, email, pseudo, address, region, zip_code, path } = state.inscription;
     
     
    
     console.log('je fait mon getState pour recuperer', { last_name, first_name, email, pseudo, address, region, zip_code, path});

     try {
       // on execute la requete POST /createUser
         console.log('je lance ma requete create user');


// !!! ici se trouve le soucis

         const { last_name, first_name, email, pseudo, address, region,  zip_code, path } = await requestInscriptionForm(/* last_name, first_name, email, pseudo, address, zip_code, path */);
         console.log("la requete est terminé et j'ai récupéré:", { last_name, first_name, email, pseudo, address, region, zip_code,  path });




        
         console.log("je dispatch SAVE_USER avec les infos de l'utilisateur connecté");
         store.dispatch(
           actionSaveUser(last_name, first_name, email, pseudo, address, region, zip_code, path),
         );
       }
       catch (err) {
       // on capture les eventuelles erreur de la requete
         console.error(err);
       }
 
     return; // on bloque mon action SUBMIT_LOGIN pour ne pas l'envoyer aux reducers
   }

  /*  case SAVE_USER: {
     // 1. je sauvegarder le token dans mon instance perso axios
     saveAuthorization(action.payload.token);

     // j'envoie l'action SAVE_USER aux reducers
     // avant de faire ma requete, pour ne pas bloquer mon action SAVE_USER
     next(action);

     try {
       // 2. j'appel ma requete securisé, mais comme j'ai posé le token dans mon instance, ma requete pourra l'utiliser
       const { favorites } = await requestFavorites();
       console.log('resultat de la requete favorites=', favorites);
       store.dispatch(actionSetFavorites(favorites));
     }
     catch (err) {
       console.error(err);
     }
     break;
   } */

   default:
     next(action); // pour dire à redux qu'il peut passer aux middlewares suivant, puis aux reducers
 }
};

export default inscriptionMiddleware;