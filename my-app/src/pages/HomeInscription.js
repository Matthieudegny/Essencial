// == Imports
import React from "react";
import { NavLink } from 'react-router-dom';

const HomeInscription = () => {
    return (
        <div className="home" >
    
            <div className="homeContent">
                Ici je suis sur ma page Home Inscription
            </div>

            <NavLink
            to="/accueil-connexion"
            >   
            Pahe HomeLog

             </NavLink>

        </div>
    );
};

export default HomeInscription;
