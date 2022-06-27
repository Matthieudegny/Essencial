
import {SUBMIT_FRIEND, SAVE_FRIEND, actionSaveFriend} from '../../actions/addfriend';
import { DELETE_FRIEND } from '../../actions/deleteFriend';
import { DELETE_MEMBER } from '../../actions/deletemembers';
import { actionSaveAllFriends } from '../../actions/getAll';
import {requestAddFriend, saveAuthorization, requestGetAllFriends, requestDeleteFriend, requestDeleteMember, requestGetAllMember   } from '../../requests/';


const addHeartMiddleware = (store) => (next) => async (action) => {
 switch (action.type) {
   case SUBMIT_FRIEND: {

    //console.log("id de la card ou je clique",action.id);
   
      // on intercepte mon action SUBMIT_FRIEND
     //console.log("addHeartMiddleware j'ai intercepté SUBMIT_FRIEND");
     
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
         //console.log('je lance ma requete addFriend');
        
         const data  = await requestAddFriend( action.payload.id  );
         //console.log("la requete est terminé et j'ai récupéré:", data.message);
         window.alert("Vous êtes maintenant Amis !");
  
         //console.log("je dispatch SAVE_FRIEND avec les infos de l'ajout d'amis");
         const response = await requestGetAllFriends(action.payload.idUser);
        //console.log("la requete est terminé et j'ai récupéré mon tableau de user",response);

        //console.log(response.data)
        //console.log("je dispatch SAVE_ALL_FRIENDS dans mon reducer allUsers");
          store.dispatch(
            actionSaveAllFriends(response.data),
          );
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

  case DELETE_FRIEND: {
    
    try {
      // on execute la requete DELETE /deleteFriend
        //console.log('je lance ma requete addFriend');
       
        const data  = await requestDeleteFriend( action.payload.id  );
        //console.log("la requete est terminé et j'ai récupéré:", data);
 
        //console.log("je dispatch DELETE_FRIEND avec les infos de la suppression d'amis");
        const response = await requestGetAllFriends(action.payload.idUser);
       //console.log("la requete est terminé et j'ai récupéré mon tableau de user",response);

       //console.log(response.data)
       //console.log("je dispatch SAVE_ALL_FRIENDS dans mon reducer allUsers");
        store.dispatch(
            actionSaveAllFriends(response.data),
          );
      }
      catch (err) {
      // on capture les eventuelles erreur de la requete
        console.error(err);
      } 

   
    // avant de faire ma requete, pour ne pas bloquer mon action SAVE_USER
    next(action);
    break;
  } 

  case DELETE_MEMBER: {
    
    try {
      // on execute la requete DELETE /deleteFriend
        //console.log('je lance ma requete addFriend');
       
        const data  = await requestDeleteMember( action.payload.id  );
        //console.log("la requete est terminé et j'ai récupéré:", data);
 
        //console.log("je dispatch DELETE_FRIEND avec les infos de la suppression d'amis");
       // const response = await requestGetAllMember(action.payload.idUser);
       //console.log("la requete est terminé et j'ai récupéré mon tableau de user",response);

       //console.log(response.data)
       //console.log("je dispatch SAVE_ALL_FRIENDS dans mon reducer allUsers");
        store.dispatch(
            actionSaveAllFriends(response.data),
          );
      }
      catch (err) {
      // on capture les eventuelles erreur de la requete
        console.error(err);
      } 

   
    // avant de faire ma requete, pour ne pas bloquer mon action SAVE_USER
    next(action);
    break;
  } 
   

   default:
     next(action); // pour dire à redux qu'il peut passer aux middlewares suivant, puis aux reducers
 }
};

export default addHeartMiddleware;