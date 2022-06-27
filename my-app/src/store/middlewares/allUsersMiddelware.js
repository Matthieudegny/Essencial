
import { GET_ALL_USERS, GET_ALL_VILLAGES, actionSaveAllUsers, actionSaveAllVillages, GET_ALL_FRIENDS,actionSaveAllFriends }  from '../../actions/getAll';
import { requestGetAllUSers, requestGetAllVillages, requestGetAllFriends } from '../../requests';

const allUsersMiddleware = (store) => (next) => async (action) => {
 switch (action.type) {
   case GET_ALL_USERS: {

     // on intercepte mon action SUBMIT_LOGIN
     /* console.log("allUsersMiddleware j'ai intercepté GET_ALL_USERS"); */

     try {
       // on execute la requete POST /login
         /* console.log('je lance ma requete requestGetAllUsers'); */
         const response = await requestGetAllUSers();
         /* console.log("la requete est terminé et j'ai récupéré mon tableau de user"); */


        /* console.log("je dispatch SAVE_ALL_USERS dans mon reducer allUsers"); */

         store.dispatch(
           actionSaveAllUsers(response.data),
         );
       }
       catch (err) {
       // on capture les eventuelles erreur de la requete
         console.error(err);
         window.alert("Un problème est survenu lors de votre connexion, veuillez vérifier votre identifiant et votre mot de passe, en cas de besoin vous pouvez utiliser Essencial en mode visiteur ou contacter nos developpeur via le formulaire Contact ")
       }
 
     break; // on bloque mon action SUBMIT_LOGIN pour ne pas l'envoyer aux reducers
   }

   case GET_ALL_VILLAGES: {
    // on intercepte mon action GET_ALL_VILLAGE
    //console.log("allUsersMiddleware j'ai intercepté GET_ALL_VILLAGES");

    try {
      // on execute la requete POST /login
        //console.log('je lance ma requete requestGetAllVillages');
        const response = await requestGetAllVillages();
        //console.log("la requete est terminé et j'ai récupéré mon tableau de user");

      //console.log(response.data)
       //console.log("je dispatch SAVE_ALL_VILLAGES dans mon reducer allUsers");
        store.dispatch(
          actionSaveAllVillages(response.data),
        );
      }
      catch (err) {
      // on capture les eventuelles erreur de la requete
        console.error(err);
        window.alert("Un problème est survenu lors de votre connexion, veuillez vérifier votre identifiant et votre mot de passe, en cas de besoin vous pouvez utiliser Essencial en mode visiteur ou contacter nos developpeur via le formulaire Contact ")
      }

    return; // on bloque mon action SUBMIT_LOGIN pour ne pas l'envoyer aux reducers
  }

  case GET_ALL_FRIENDS: {
    // on intercepte mon action GET_ALL_FRIENDS
    //console.log("allUsersMiddleware j'ai intercepté GET_ALL_FRIENDS");

    try {
      // on execute la requete GET / api/user/friends/{id}
      //console.log("je soumets ma requête avec ", action.payload.idUser)
        //console.log('je lance ma requete requestGetAllFriends avec', action.payload.idUser);
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

    return; // on bloque mon action SUBMIT_LOGIN pour ne pas l'envoyer aux reducers
  }


   default:
     next(action); // pour dire à redux qu'il peut passer aux middlewares suivant, puis aux reducers
 }
};

export default allUsersMiddleware;
