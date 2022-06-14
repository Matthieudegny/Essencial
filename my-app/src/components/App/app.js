// == Imports
import React from "react";
import { Route, Routes,NavLink } from 'react-router-dom';
import Conteneur from '../Conteneur'
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
import HomeConnexion from '../../pages/HomeConnexion';
import Contact from '../../pages/Contact';


const Inscription = () => {
    return (
        <div className="inscription" >

            <HomeConnexion/>
            <HomeVisitor/>

            <Routes>
              <Route path="/conteneur" element={Conteneur()} />
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
    );
};

export default Inscription;