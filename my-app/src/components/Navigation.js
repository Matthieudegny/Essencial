// == Imports
import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {

    return (
    <div className="navigation">
        <ul>
            <li><NavLink to="/" > 
              <span>Accueil</span>
            </NavLink></li>
            <li><NavLink to="/ajouter-un-post" > 
              <span>Ajouter un post</span>
            </NavLink></li>
            <li>Menu burger</li>
            <li>Affichage Pseudo </li>
        </ul>
    </div>    
    );
};

export default Navigation;