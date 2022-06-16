// == Imports
import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/sidebar.scss'

const Sidebar = () => {

    return (
    <div className="sidebar">

      <NavLink className="sidebar-link" to="/tutos" >
       <div >
          <span className="sidebar-span">Tutoriel</span>
        </div>
      </NavLink>
      <NavLink className="sidebar-link" to="/amis" > 
        <div >
            <span className="sidebar-span">Amis</span>
        </div>
      </NavLink>
      <NavLink className="sidebar-link" to="/eco-village-vue" > 
        <div >
            <span className="sidebar-span">Les Ecovillages</span>
        </div> 
      </NavLink>
     
    
    </div>    
    );
};

export default Sidebar;