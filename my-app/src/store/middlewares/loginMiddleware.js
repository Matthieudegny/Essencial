import {SUBMIT_LOGIN, actionSaveUser, LOGOUT, SAVE_USER,GET_INFOS, actionSaveInfoForGetInStore} from '../../actions/user';
import { actionSaveInfoUpdateProfileUser, actionSaveInfoUpdateProfileVillage } from '../../actions/updateProfile';
 import {removeAuthorization, requestLogin, requestInfosUser,  saveAuthorization } from '../../requests';
 import jwt_decode from "jwt-decode";

 
const loginMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      // on intercepte mon action SUBMIT_LOGIN
      //console.log("loginMiddleware j'ai intercepté SUBMIT_LOGIN");

      const state = store.getState();
      //je recupere mon state dans le reducer .user 
      const { email, password } = state.user;
      //console.log('je fait mon getState pour recuperer', { email, password });

      try {
        // on execute la requete POST /login
          //console.log('je lance ma requete login');
          const { logged, pseudo, token, id } = await requestLogin(email, password);
         
          //console.log("la requete est terminé et j'ai récupéré:", {logged, pseudo,token, id});

          //console.log("je dispatch SAVE_USER avec les infos de l'utilisateur connecté");
          store.dispatch(
            actionSaveUser(pseudo, token),
          );
          localStorage.setItem('token', token);
          const tokenDecoded = jwt_decode(token);
          //console.log(tokenDecoded);
         // console.log(tokenDecoded);
          const data = await requestInfosUser(tokenDecoded.id, tokenDecoded.type);
          store.dispatch(actionSaveInfoForGetInStore(data.data, token));
          //delete data.data.id
          //console.log(data.data, tokenDecoded.type)
          //pour update profile je mets à jour le state à chaque refresh (->useeffect app)
          if(tokenDecoded.type==='user'){
            store.dispatch(actionSaveInfoUpdateProfileUser(data.data, tokenDecoded.type, tokenDecoded.id))
          }else{
            store.dispatch(actionSaveInfoUpdateProfileVillage(data.data, tokenDecoded.type))
          }
          
        }

        catch (err) {
        // on capture les eventuelles erreur de la requete
          console.error(err);
          window.alert("Un problème est survenu lors de votre connexion, veuillez vérifier votre identifiant et votre mot de passe, en cas de besoin vous pouvez utiliser Essencial en mode visiteur ou contacter nos developpeur via le formulaire Contact ")
        }
     
      return; // on bloque mon action SUBMIT_LOGIN pour ne pas l'envoyer aux reducers
    }

     case SAVE_USER: {
      // 1. je sauvegarder le token dans mon instance perso axios
      saveAuthorization(action.payload.token);
      
      // j'envoie l'action SAVE_USER aux reducers
      // avant de faire ma requete, pour ne pas bloquer mon action SAVE_USER
      next(action);
      break;
    }

    case LOGOUT: {
      //je récupére mon state 
      const state = store.getState();
      //je réinitialise mon state 
       

      // on supprime le token de axios
      removeAuthorization();
      localStorage.clear();
      
      next(action);
      break;
    }

    case GET_INFOS: {

      try{
        const infosUser = await requestInfosUser(action.payload.id, action.payload.type);
        //console.log("actionSaveInfoForGetInStore",infosUser.data, action.payload.type)
       // console.log("actionSaveInfoForGetInStore",infosUser.data)
        const token = localStorage.getItem('token');
        store.dispatch(actionSaveInfoForGetInStore(infosUser.data, token));

        //pour update profile je mets à jour le state à chaque refresh (->useeffect app)
        if(action.payload.type==='user'){
          store.dispatch(actionSaveInfoUpdateProfileUser(infosUser.data, action.payload.type, action.payload.id))
        }else{
          store.dispatch(actionSaveInfoUpdateProfileVillage(infosUser.data, action.payload.type))
        }
      }
      
      catch(err){
        //console.log("alors?")
        console.log("j'ai une erreur loginMiddleware",err);
            }

     
      next(action);
      break;
    }
    

    default:
      next(action); // pour dire à redux qu'il peut passer aux middlewares suivant, puis aux reducers
  }
};

export default loginMiddleware;
