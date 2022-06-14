// == Imports
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import essencialLogo from '../media/essencial.svg';
import '../styles/homeConnexion.scss';
import AppHeader from '../components/AppHeader/index';
const HomeConnexion = () => {

    return (
        <div className="homeConnexion" >

            <AppHeader />

            <div className="homeConnexion-form">
                <form>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
                </form>
            </div>

            <div className="homeConnexion-logo">
                <img src={essencialLogo} alt="" />
            </div>

            <div className="homeConnexion-visiteur">
                <h2>Accès Simple Visiteur</h2>
                <p> Vous n'aurez pas la possibilité de partage sur notre site c'est bien dommage </p>
            </div>


        </div>
    );
};

export default HomeConnexion;
