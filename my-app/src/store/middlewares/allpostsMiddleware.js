
import { GET_ALL_POSTS, GET_ALL_TUTOS, actionSaveAllPosts, actionSaveAllTutos } from '../../actions/getallposts';
import { requestGetAllPosts,requestGetAllTutos } from '../../requests';


const allpostsMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case GET_ALL_POSTS: {
 
      // on intercepte mon action SUBMIT_LOGIN
      /* console.log("allpostsMiddleware j'ai intercepté GET_ALL_POSTS"); */
 
      try {
        // on execute la requete POST /login
          /* console.log('je lance ma requeterequestGetAllPosts'); */
          const response = await requestGetAllPosts();
          /* console.log("la requete est terminé et j'ai récupéré mon tableau de user"); */
 
 
         /* console.log("je dispatch SAVE_ALL_USERS dans mon reducer allposts"); */
 
          store.dispatch(
            actionSaveAllPosts(response),
          );
        }
        catch (err) {
        // on capture les eventuelles erreur de la requete
          console.error(err);
          window.alert("Un problème est survenu lors de votre connexion, veuillez vérifier votre identifiant et votre mot de passe, en cas de besoin vous pouvez utiliser Essencial en mode visiteur ou contacter nos developpeur via le formulaire Contact ")
        }
  
      break; // on bloque mon action SUBMIT_LOGIN pour ne pas l'envoyer aux reducers
    }
 
    case GET_ALL_TUTOS: {
      
     // on intercepte mon action GET_ALL_VILLAGE
     //console.log("allUsersMiddleware j'ai intercepté GET_ALL_VILLAGES");
 
     try {
       // on execute la requete POST /login
         //console.log('je lance ma requete requestGetAllVillages');
         const response = await requestGetAllTutos();
         //console.log("la requete est terminé et j'ai récupéré mon tableau de user");
 
       //console.log(response.data)
        //console.log("je dispatch SAVE_ALL_VILLAGES dans mon reducer allUsers");
         store.dispatch(
           actionSaveAllTutos(response),
         );
       }
       catch (err) {
       // on capture les eventuelles erreur de la requete
         console.error(err);
         window.alert("Un problème est survenu lors de votre connexion, veuillez vérifier votre identifiant et votre mot de passe, en cas de besoin vous pouvez utiliser Essencial en mode visiteur ou contacter nos developpeur via le formulaire Contact ")
       }
 
     return; // on bloque mon action SUBMIT_LOGIN pour ne pas l'envoyer aux reducers
   }
 
 
    default:
      next(action); // pour dire à redux qu'il peut passer aux middlewares suivant, puis aux reducers
  }
 };
 
 export default allpostsMiddleware;
 