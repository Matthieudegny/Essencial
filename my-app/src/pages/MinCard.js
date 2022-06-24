// == Imports
import React from "react";
import '../styles/minCard.scss'
import { NavLink } from "react-router-dom";
import HeartForm from "../components/HeartForm";
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
            <HeartForm />
        </div>


    );
};

export default MinCard;