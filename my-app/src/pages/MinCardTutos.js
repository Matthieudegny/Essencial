// == Imports
import React from "react";
import "../styles/minCardTutos.scss";
import { NavLink } from "react-router-dom";


const MinCardTutos = ({ imageLink, title, id }) => {

  return (
    <div className="minCardTutos">

      <NavLink to={`/tutos/${id}`}>
        <img src={imageLink} alt="J'ai pas d'image ici Arthur ? c'est dommage je trouve :)  " />
      </NavLink>

      <h1>{title}</h1>
     

    </div>
  );
};

export default MinCardTutos;
