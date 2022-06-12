// == Imports
import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/sideBar.scss'

const Sidebar = () => {

    return (
    <div className="sidebar">
        {/* <div classNameName="sidebar-link">
          <NavLink to="/tutos" > 
            <span>Tutoriel</span>
          </NavLink>
        </div>
        <div classNameName="sidebar-link">
          <NavLink to="/amis" > 
            <span>Amis</span>
          </NavLink>
        </div>
        <div classNameName="sidebar-link">
          <NavLink to="/eco-village-vue" > 
            <span>Les Ecovillages</span>
          </NavLink>
        </div>  */}

       {/* {Bulma's version } */}
      <aside className="menu">
  
        <ul className="menu-list test">
          <li>
          <NavLink to="/tutos"  > 
            <span>Tutoriel</span>
          </NavLink>
          </li>
          <li>
          <NavLink to="/amis"  > 
            <span>Amis</span>
          </NavLink>
          </li>
          <li>
          <NavLink to="/eco-village-vue"  > 
            <span>Les Ecovillages</span>
          </NavLink>
          </li>
        </ul>      
      </aside>  
     
    </div>    
    );
};

export default Sidebar;