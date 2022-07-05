// == Imports
import React from "react";
import "../styles/minCardVillage.scss";
import { NavLink } from "react-router-dom";


const MinCardVillage = ({ imageLink, name, region, id }) => {

  return (
    <div className="minCardVillage">

      <NavLink to={`/eco-village-vue/${id}`}>
        <img src={imageLink} alt="eco-village" />
      </NavLink>

      <h1>
        {name}
      </h1>

      <h3>{region}</h3>

    </div>
  );
};

export default MinCardVillage;
