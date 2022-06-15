
import {
  SUBMIT_LOGIN, actionSaveUser, LOGOUT, /* SAVE_USER, */} from '../../actions/user';
 import {removeAuthorization, requestLogin,  /* saveAuthorization, */ } from '../../requests';

const loginMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      // on intercepte mon action SUBMIT_LOGIN
      console.log("loginMiddleware j'ai intercepté SUBMIT_LOGIN");

      const state = store.getState();
      const { email, password } = state;
      console.log('je fait mon getState pour recuperer', { email, password });

      try {
      // on execute la requete POST /login
        console.log('je lance ma requete login');
        const { logged, pseudo, token } = await requestLogin(email, password);
        //const reponse = await requestLogin(email, password);
        //j'ai enlevé le response.data dans request l31 -> pour récupérer l'objet data complet de l'API et non juste logged,pseudo,token
        console.log("la requete est terminé et j'ai récupéré:", { logged, pseudo, token });
        //console.log(reponse)
        console.log("je dispatch SAVE_USER avec les infos de l'utilisateur connecté");
        store.dispatch(
          actionSaveUser(pseudo, token),
        );
        console.log(token)
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

    case LOGOUT: {
      // on supprime le token de axios
      removeAuthorization();
      next(action);
      break;
    }

    default:
      next(action); // pour dire à redux qu'il peut passer aux middlewares suivant, puis aux reducers
  }
};

export default loginMiddleware;
