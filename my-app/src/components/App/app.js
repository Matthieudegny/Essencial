// == Imports
import React from "react";
import { Route, Routes,NavLink } from 'react-router-dom';

import Footer from "../Footer";
import Page from "../Page";

const App = () => {
    return (
        <div className="App" >
{/*     
            <div className="App">
                Ici je suis sur ma page d'accueil
            </div>

            <Routes>
              <Route path="/" element={App()} />
              <Route path="/conteneur" element={Conteneur()} />
            </Routes>

            <NavLink to="/conteneur">
              Lien visiteur
            </NavLink> */}
            <Page />

            <Footer />

        </div>
    );
};

export default App;