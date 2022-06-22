// == Imports
import React from "react";
import '../styles/minCard.scss'

const MinCard = ({
    imageLink,
    pseudo,
    region
}) => {
    return (
        <div className="minCard" >
     
            <img src={imageLink} alt="user" />

            <h1>{pseudo}
             <i class="fas fa-heart"></i>
             </h1>

            <h2>{region}</h2>
        

        </div>
    );
};

export default MinCard;