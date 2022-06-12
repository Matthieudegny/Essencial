// == Imports
import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/sidebar.scss'

const Sidebar = () => {

    return (
    <div className="sidebar">

     
       <div className="sidebar-link">
        <NavLink to="/tutos" > 
          <span>Tutoriel</span>
        </NavLink>
      </div>
      <div className="sidebar-link">
        <NavLink to="/amis" > 
          <span>Amis</span>
        </NavLink>
      </div>
      <div className="sidebar-link">
        <NavLink to="/eco-village-vue" > 
          <span>Les Ecovillages</span>
        </NavLink>
      </div> 

       {/* {Bulma's version } */}
      {/* <aside class="menu">
  
        <ul class="menu-list">
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
      </aside>     */}
    
    </div>    
    );
};

export default Sidebar;