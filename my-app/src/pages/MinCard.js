// == Imports
import React from "react";
import '../styles/minCard.scss'

const MinCard = ({
    imageLink,
    pseudo,
    region,
    description
}) => {
    return (
        <div className="minCard" >
     
            <img src={imageLink} alt="user" />

            <h1>{pseudo}
             <i className="fas fa-heart"></i>
             </h1>

             <h2>{description}</h2>

            <h3>{region}</h3>
        

        </div>
    );
};

export default MinCard;