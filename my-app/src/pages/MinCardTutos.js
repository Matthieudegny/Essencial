// == Imports
import React from "react";
import "../styles/minCardTutos.scss";
import { NavLink } from "react-router-dom";


const MinCardTutos = ({ photo_path, post_title, post_id }) => {
//console.log(post_id);
  return (
    <div className="minCardTutos">

      <NavLink to={`/tutos/${post_id}`}>
        <img src={photo_path} alt="photo " />
      </NavLink>

      <h1>{post_title}</h1>
     

    </div>
  );
};

export default MinCardTutos;
