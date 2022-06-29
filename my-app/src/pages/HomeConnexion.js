// == Imports
import React from "react";
import essencialLogo from '../media/essencial.svg';
import '../styles/homeConnexion.scss';
import AppHeader from '../components/AppHeader/index';
import { NavLink } from "react-router-dom";
const HomeConnexion = () => {

    return (
        <div className="homeConnexion" >

           
           <div className="homeConnexion-container-form">

                <div className="homeConnexion-form">
                <AppHeader />
                </div>

                <div className="homeConnexion-visiteur">
                    <h2>Accès Simple Visiteur</h2>
                    <p> Vous n'aurez pas la possibilité de partage sur notre site, c'est bien dommage </p>
                        <button className="homeConnexion-visiteur-button" >
                            <NavLink to="/accueil" > 
                                Visiter
                            </NavLink>
                        </button>
                </div>

           </div>

            {/* <div className="homeConnexion-logo">
                <img src={essencialLogo} alt="" />
            </div> */}


        </div>
    );
};

export default HomeConnexion;
