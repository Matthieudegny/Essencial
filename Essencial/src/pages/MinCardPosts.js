// == Imports
import React from "react";
import "../styles/minCardPosts.scss";
import { NavLink } from "react-router-dom";


const MinCardPosts = ({ photo_path, post_title, post_id, categories_name }) => {
//console.log(post_id);
  return (
    <div className="minCardPosts">

      <NavLink to={`/posts/${post_id}`}>
        <img src={photo_path} alt="photo" />
      </NavLink>

      <h1>{post_title}</h1>
      <h2>{categories_name}</h2>
     

    </div>
  );
};

export default MinCardPosts;
