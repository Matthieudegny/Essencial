// == Imports
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    return (
    <div className="sidebar">
        <ul>
            <li><NavLink to="/" > 
              <span>Tutoriel</span>
            </NavLink></li>
            <li><NavLink to="/" > 
              <span>Amis</span>
            </NavLink></li>
            <li><NavLink to="/" > 
              <span>Les Ecovillages</span>
            </NavLink></li>
        </ul>
    </div>    
    );
};

export default Sidebar;