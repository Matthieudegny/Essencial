// == Imports
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import '../styles/sidebar.scss'

const Sidebar = () => {
  //je récupére isLogged dans mon state
  const isLogged = useSelector((state) => state.user.isLogged);


  return (
    <div className="sidebar">

      <NavLink className="sidebar-link" to="/tutos" >
        <div >
          <span className="sidebar-span">Tutoriel</span>
        </div>
      </NavLink>

      {isLogged ? (
        <NavLink className="sidebar-link" to="/amis" >
          <div >
            <span className="sidebar-span">Amis</span>
          </div>
        </NavLink>

      ) : (
        ''
      )}

      <NavLink className="sidebar-link" to="/membres" >
        <div >
          <span className="sidebar-span">Membres</span>
        </div>
      </NavLink>


      <NavLink className="sidebar-link" to="/ecoVillages" >
        <div >
          <span className="sidebar-span">Les Ecovillages</span>
        </div>
      </NavLink>


    </div>
  );
};

export default Sidebar;