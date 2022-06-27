
import {SUBMIT_FRIEND, SAVE_FRIEND, actionSaveFriend} from '../../actions/addfriend';
import {requestAddFriend, saveAuthorization,  } from '../../requests/';


const addHeartMiddleware = (store) => (next) => async (action) => {
 switch (action.type) {
   case SUBMIT_FRIEND: {

    console.log("id de la card ou je clique",action.id);
   
      // on intercepte mon action SUBMIT_FRIEND
     console.log("addHeartMiddleware j'ai intercepté SUBMIT_FRIEND");
     
/* 
     const state = store.getState();
     console.log(store.getState(),'stateaddheart GETSTATE')
     //je recupere mon state dans le reducer .addheart 
    console.log('logstate.addheart',state.addheart);
    //ici je renome en destructurant avec les : (id devient friend id)
     const {id:friend_id } = state.addheart;
     
     console.log('je fait mon getState pour recuperer', {friend_id});
 */
     try {
       // on execute la requete POST /AddFriend
         console.log('je lance ma requete addFriend');
         
         
         const data  = await requestAddFriend( action.id  );
         console.log("la requete est terminé et j'ai récupéré:", data.message);
         window.alert("Vous êtes maintenant Amis !");
  
         console.log("je dispatch SAVE_FRIEND avec les infos de l'ajout d'amis");
        /*  store.dispatch(
           actionSaveFriend(friend_id ),
         ); */
       }
       catch (err) {
       // on capture les eventuelles erreur de la requete
         console.error(err);
       } 
 
     next(action);
     break; // on bloque mon action SUBMIT_LOGIN pour ne pas l'envoyer aux reducers
   }
   case SAVE_FRIEND: {
    // 1. je sauvegarder le token dans mon instance perso axios
    saveAuthorization(action.payload.token);

    // j'envoie l'action SAVE_USER aux reducers
    // avant de faire ma requete, pour ne pas bloquer mon action SAVE_USER
    next(action);
    break;
  } 
   

   default:
     next(action); // pour dire à redux qu'il peut passer aux middlewares suivant, puis aux reducers
 }
};

export default addHeartMiddleware;