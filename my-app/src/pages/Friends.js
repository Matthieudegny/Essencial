// == Imports
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect  } from 'react';
import MinCard from "./MinCard";
import { actionGetAllUsers } from '../actions/getAll';
import { NavLink } from "react-router-dom";
import '../styles/friends.scss'

const Friends = () => {

  const usersArray = useSelector((state) => state.allUsers.allUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetAllUsers());
  }, [])

    return (
        <div className="friends" >
          
          {usersArray ? (
            <>
              {usersArray.map(({
                id, path, pseudo, region
              }) => (
                <NavLink to={`/user-vue/${id}`} > 
                 {/*  {console.log(id)} */}
                  <MinCard
                    key={id}
                    imageLink={path}
                    pseudo={pseudo}
                    region={region}
                 />

                </NavLink>
                ))}
            </>
          ) : (
            
            <>
            </> 

          )}
         
    
    
        </div>
    );
};

export default Friends;