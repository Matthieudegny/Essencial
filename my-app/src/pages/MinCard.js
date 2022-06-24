// == Imports
import React from "react";
import '../styles/minCard.scss'
import {  useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import HeartForm from "../components/HeartForm";
import { actionSubmitFriend } from '../actions/addfriend';


const MinCard = ({
    imageLink,
    pseudo,
    region,
    id

}) => {
    const dispatch = useDispatch();
    return (
        <div className="minCard"  >
            {/* attention au image link  */}
            <NavLink  to={`/user-vue/${id}`} >
                <img src={imageLink} alt="user" />
            </NavLink>
            <h1>{pseudo}</h1>
            <h3>{region}</h3>
            <HeartForm 
             handleHeart={() => {
                console.log('handleHeart');
                dispatch(
                   // on envoie mon action submitLogin au middleware, pour qu'il declenche la requete de login
                  actionSubmitFriend(),
                );
                
              }}
            
            
            />
        </div>


    );
};

export default MinCard;