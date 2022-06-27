
import {SUBMIT_POST, actionSavePost, SAVE_USER, } from '../../actions/addpost';
import {requestAddPost, saveAuthorization,  } from '../../requests/';
import { useNavigate} from 'react-router-dom';

const addpostMiddleware = (store) => (next) => async (action) => {
 switch (action.type) {

  case SAVE_USER: {
    // 1. je sauvegarder le token dans mon instance perso axios
    saveAuthorization(action.payload.token);

    // j'envoie l'action SAVE_USER aux reducers
    // avant de faire ma requete, pour ne pas bloquer mon action SAVE_USER
    next(action);
    break;
  } 

   case SUBMIT_POST: {
     // on intercepte mon action SUBMIT_POST
     //console.log("loginMiddleware j'ai intercepté SUBMIT_POST");
     

     const state = store.getState();
    // console.log(store.getState(),'stateaddpost')
     //je recupere mon state dans le reducer .addpost 
    //console.log('logstate.addpost',state.addpost);
     const { title, content, path, category_1, category_2 } = state.addpost;
     
     
    
     console.log('je fait mon getState pour recuperer', { title, content, path ,category_1 , category_2 });

     try {
       // on execute la requete POST /createAddPost
         console.log('je lance ma requete create addPost');
         
       


         const { post, photo } = await requestAddPost(title, content, path ,category_1 , category_2  );
         console.log("la requete est terminé et j'ai récupéré:", { post,photo });
         alert("Votre post a bien été ajouté Merci!");
       


        
         console.log("je dispatch SAVE_POST avec les infos du post");
         store.dispatch(
           actionSavePost(title, content, path ,category_1 , category_2 ),
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

export default addpostMiddleware;