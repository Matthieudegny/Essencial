// == Imports
import React from "react";
import '../styles/minCard.scss'
import { NavLink } from "react-router-dom";
const MinCard = ({
    imageLink,
    pseudo,
    region,
    id

}) => {
    return (
        <div className="minCard"  >
            {/* attention au image link  */}
            <NavLink  to={`/user-vue/${id}`} >
                <img src={imageLink} alt="user" />
            </NavLink>
            <h1>{pseudo}  </h1>

            <h3>{region}</h3>
            <i className="fas fa-heart heart"></i>

        </div>


    );
};

export default MinCard;