
import {actionSaveVillage, SUBMIT_FORM_VILLAGE,  /* SAVE_USER, */} from '../../actions/inscriptionvillage';
import { DELETE_VILLAGE, REQUEST_CHANGE_PROFIL_VILLAGE } from '../../actions/updateProfile'
import {requestInscriptionFormVillage, requestUpdateVillage, requestDeleteVillage /* saveAuthorization, */ } from '../../requests';
import { actionLogout } from '../../actions/user';

const inscriptionVillageMiddleware = (store) => (next) => async (action) => {
 switch (action.type) {
   case SUBMIT_FORM_VILLAGE: {
     // on intercepte mon action SUBMIT_FORM
     console.log("loginMiddleware j'ai intercepté SUBMIT_FORM de village");
     

     const state = store.getState();
     console.log(store.getState(),'inscription village')
     //je recupere mon state dans le reducer .inscription 
    console.log('logstate.inscription de village',state.inscriptionvillage);
     const {name, path, description, website, address, zip_code, city, region, last_name_manager, first_name_manager, date_of_birth_manager, phone_number, email, password} = state.inscriptionvillage;
     
     
    
     //console.log('je fait mon getState pour recuperer mon village', {name, path, description, website, address, zip_code, city, region, last_name_manager, first_name_manager, date_of_birth_manager, phone_number, email, password});


       try {
        // on execute la requete POST /createVillage
          //console.log('je lance ma requete create village');
 
 
 
 
          const { ecovil, photo} = await requestInscriptionFormVillage(name, path, description, website, address, zip_code, city, region, last_name_manager, first_name_manager, date_of_birth_manager, phone_number, email, password);
          console.log("la requete est terminé et j'ai récupéré:", {ecovil ,photo});
 
 
 
 
         
          //console.log("je dispatch SAVE_VILLAGE avec les infos du village");
          store.dispatch(
            actionSaveVillage(name, path, description, website, address, zip_code, city, region, last_name_manager, first_name_manager, date_of_birth_manager, phone_number, email, password),
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
   case REQUEST_CHANGE_PROFIL_VILLAGE : {

    try {
      //console.log("je soumets ma requête avec ", action.payload.dataUser)

        const response = await requestUpdateVillage( action.payload.dataUser );
        //console.log("réponse de ma requee updateUser",response)
        
        // store.dispatch(
        //   actionSaveUser( last_name, first_name, email, pseudo, password, address, region, zip_code, city, path),
        // );
      }
      catch (err) {
      // on capture les eventuelles erreur de la requete
        console.error(err);
      }

    return
   }

   case DELETE_VILLAGE : {

    try {
      //console.log("je soumets ma requête deleteVillage avec ", action.payload.userId)

        const response = await requestDeleteVillage( action.payload.userId );
        console.log("réponse de ma requee deleteVillage",response)

        if(response.status===200) {
          window.alert("Votre compte a bien été supprimé")
          //console.log("user bien supprimé, logout lancé")
          store.dispatch(
            actionLogout(),
          );
        }
        
      }
      catch (err) {
      // on capture les eventuelles erreur de la requete
        console.error(err);
      }

    return
   }

   default:
     next(action); // pour dire à redux qu'il peut passer aux middlewares suivant, puis aux reducers
 }
};

export default inscriptionVillageMiddleware;