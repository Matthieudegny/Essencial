// == Imports
import React from "react";
import { NavLink } from "react-router-dom";




const Navigation = () => {

  return (
    < nav className="navbar">
      {/*Logo Essencial*/}
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={"/essencial.svg"} width="112" height="28" />
        </a>
      </div>

      <div className="navbar-start mb-2" >

        <input className="input mt-2 ml-6" type="text" placeholder="Recherche" />

        <a href="/" className="navbar-item ml-6 ">
          <span className="icon-text">
            <span className="icon">
              <i className="fa fa-home mt-1"></i>
            </span>
            <span className="is-size-4 mt-1" ></span>
          </span>
        </a>

        <a href="/ajouter-un-post"className="navbar-item ml-6 ">
          <span className="icon">
            <i className="fa fa-edit mt-1 "></i>
          </span>
        </a>


      </div>
      <div className="navbar-end" >

      <div className="navbar-item has-dropdown is-hoverable  mr-6">
          <span className="icon">
            <i className="fas fa-align-justify mt-5 "></i>
          </span>
          <div className="navbar-dropdown">
            <a href="/gestion-de-profil" className="navbar-item">
              Gestion de profil
            </a>
           

            <hr  className="navbar-divider" />
            <a href="/accueil-connexion" className="navbar-item">
              Se deconnecter
            </a>
          </div>
        </div>

        <i className="fas fa-user mt-2 ml-6"></i>
        <a className="navbar-item is-size-4 mr-6">
          Bienvenue Koala
        </a>
      </div>

    </nav>
  );
};

export default Navigation;