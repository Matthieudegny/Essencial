// == Imports
import React from "react";
import "../styles/minCardTutos.scss";
import { NavLink } from "react-router-dom";


const MinCardTutos = ({ photo_path, post_title, post_id }) => {
//console.log(post_id);
  return (
    <div className="minCardTutos">

      <div className="mincCardTutos-container-photo">
        <NavLink to={`/tutos/${post_id}`}>

          <img src={photo_path} alt="photo " />

        </NavLink>
      </div>

      <div className="mincCardTutos-container-text">

        <h1>{post_title}</h1>

      </div>
     

    </div>
  );
};

export default MinCardTutos;
