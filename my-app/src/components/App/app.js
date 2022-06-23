// == Import
import React from 'react';
import { useEffect,useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { actiongetinfos, actionSaveInfoForGetInStore } from "../../actions/user";
/*  */
//===========================================================//
//Composants
import HomeLog from '../../pages/HomeLog';
import Addpost from '../../pages/AddPost';
import Friends from '../../pages/Friends';
import Members from '../../pages/Members';
import ViewTutos from '../../pages/ViewTutos';
import About from '../../pages/About';
import HomeConnexion from '../../pages/HomeConnexion';
import ViewVillage from '../../pages/ViewVillage';
import UpdateProfil from '../../pages/UpdateProfil';
import Confidentiality from '../../pages/Confidentiality';
import Research from '../../pages/Research';
import Admin from '../../pages/Admin';
import HomeVillage from '../../pages/HomeVillage';
import HomeInscription from '../../pages/HomeInscription';
import Contact from '../../pages/Contact';
import ViewUser from '../../pages/ViewUser'
import EcoVillages from '../../pages/EcoVillages';
import error404 from '../../pages/error404';

//===========================================================//
import Navigation from '../Navigation';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
//sTYLES 
import '../../styles/index.scss';
import '../../styles/app.scss'



//il faut ajouter le token dans app 


// == Composant
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  
  //useEffect On utilise ce Hook pour indiquer à React que notre composant doit exécuter quelque chose après chaque affichage
  useEffect(() => {
    if (token !== null) {
      //1 étape decoder le token avec jwt_decode
      const user = jwt_decode(token);
      //* si j'ai besoin d'afficher un loading (spinner) ou de ne pas afficher un composant le temps de savoir si un user est co, je lance ce dispatch
      console.log(user);
      //on envoie l'action getinfos au store avec dispatch 
      dispatch(actiongetinfos(user.id, user.type));
      dispatch(actionSaveInfoForGetInStore(user));
    } 
  }, []);

  //1 étape obtenir le token
  // const tokencoded = localStorage.getItem('token');
 //2 etape décrypter le token (installer le module + code)

 //var token = "eyJ0eXAiO.../// jwt token"
//  const tokenDecoded = jwt_decode(tokencoded);
//  console.log('ici log decoded',tokenDecoded)

 //3 etape créer la requete ds un use effect (requete -> obtenir les infos du user et les save ds le state )
//  const dispatch = useDispatch();
//  const idToken = tokenDecoded.id
//  const id = idToken.toString()


// useEffect(() => {
//   //envoie de la requete avec id + type
//   dispatch(actiongetinfos(id, tokenDecoded.type))
// },[])
 

  /* const test = true;
  console.log(test); */
  return (
    <div className="App">
      {/*ici exemple de condition d'affichage de module JSX
*/}
      {/*  {test && (<header className='App-header'>
  <Navigation />
  </header>) } */}
      <header className='App-header'>

        <Navigation />

      </header>

      <main className='App-main'>

        <aside className='App-main-aside'>
          <Sidebar />
        </aside>

        <div className='App-main-page'>



          <div className='App-main-page-wall'>
            <Routes>
              <Route path="/" element={HomeConnexion()} />
              <Route path="/accueil-inscription" element={HomeInscription()} />
              <Route path="/accueil" element={HomeLog()} />
              <Route path="/home-log-village" element={HomeVillage()} />
              <Route path="/ajouter-un-post" element={Addpost()} />
              <Route path="/amis" element={Friends()} />
              <Route path="/membres" element={Members()} />
              <Route path="/ecoVillages" element={EcoVillages()} />
              <Route path="/tutos" element={ViewTutos()} />
              <Route path="/a-propos" element={About()} />
              <Route path="/admin" element={Admin()} />
              <Route path="/contact" element={Contact()} />
              <Route path="/eco-village-vue" element={ViewVillage()} />
              <Route path="/user-vue/:userId" element={<ViewUser />} />
              <Route path="/gestion-de-profil" element={UpdateProfil()} />
              <Route path="/confidentialite" element={Confidentiality()} />
              <Route path="/recherche" element={Research()} />
              <Route path="/home-log-village" element={HomeVillage()} />
              <Route path="*" element={error404()} />

            </Routes>



          </div>

        </div>

      </main>

      <footer className='App-main-footer'>
        <Footer />
      </footer>


    </div>
  );
}

// ==   Export
export default App;
//<Route path="*" element={NotFound()} />