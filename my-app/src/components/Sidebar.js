// == Imports
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    return (
    <div className="sidebar">
        <ul>
            <li>
              <NavLink to="/tutos" > 
              <span>Tutoriel</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/amis" > 
              <span>Amis</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/eco-village-vue" > 
              <span>Les Ecovillages</span>
            </NavLink>
            </li>
        </ul>
    </div>    
    );
};

export default Sidebar;