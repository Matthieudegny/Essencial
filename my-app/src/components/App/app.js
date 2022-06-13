// == Import
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../styles/app.scss'

//Composants
import HomeLog from '../../pages/HomeLog';
import Addpost from '../../pages/AddPost';
import Friends from '../../pages/Friends';
import ViewTutos from '../../pages/ViewTutos';
import About from '../../pages/About';
import HomeVisitor from '../../pages/HomeVisitor';
import ViewVillage from '../../pages/ViewVillage';
import UpdateProfil from '../../pages/UpdateProfil';
import Confidentiality from '../../pages/Confidentiality';
import Research from '../../pages/Research';
import Admin from '../../pages/Admin';
import HomeVillage from '../../pages/HomeVillage';
import HomeInscription from '../../pages/HomeInscription';
import Contact from '../../pages/Contact';

// data, styles et utilitaires
//import logo from '../../media/logo.svg';

import '../../styles/index.scss';
import Navigation from '../Navigation';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Caroussel from '../Caroussel';


// == Composant
function App() {
  
  return (
    <div className="App">

      <header className='App-header'>

        <Navigation/>

      </header>

      <main className='App-main'>

        <aside className='App-main-aside'>
          <Sidebar />
        </aside>

        <div className='App-main-page'>

          <div className="App-main-page-caroussel">
            <Caroussel />
          </div>

          <div className='App-main-page-wall'>
            <Routes>
              <Route path="/" element={HomeLog()} />
              <Route path="/accueil-inscription" element={HomeInscription()}/>
              <Route path="/accueil-connexion" element={HomeVisitor()} />
              <Route path="/ajouter-un-post" element={Addpost()} />
              <Route path="/amis" element={Friends()} />
              <Route path="/tutos" element={ViewTutos()} />
              <Route path="/a-propos" element={About()} />
              <Route path="/admin" element={Admin()} />
              <Route path="/contact" element={Contact()} />
              <Route path="/eco-village-vue" element={ViewVillage()} />
              <Route path="/gestion-de-profil" element={UpdateProfil()} />
              <Route path="/confidentialite" element={Confidentiality()} />
              <Route path="/recherche" element={Research()} />
              <Route path="/home-log-village" element={HomeVillage()} />
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