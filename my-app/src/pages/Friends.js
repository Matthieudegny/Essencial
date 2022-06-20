// == Imports
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect  } from 'react';
import MinCard from "./MinCard";
import { actionGetAllUsers } from '../actions/getAll';
import '../styles/friends.scss'

const Friends = () => {

  const usersArray = useSelector((state) => state.allUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetAllUsers());
  }, [])

    const items =[]


    if(usersArray){
      console.log("yyyes")
      for (let i =0 ; i< usersArray.length; i++) {
        // items.push(
          // < MinCard 
          // key={i}
          // imageLink={usersArray[i].path}
          // pseudo = {usersArray[i].pseudo}
          // region = {usersArray[i].region} />)
          console.log(usersArray[i])
        }
    }
   

    return (
        <div className="friends" >
          
          {/* {usersArray ? (
            <>
              {usersArray.map(({
                id, path, pseudo, region
              }) => (
                <MinCard
                key={id}
                imageLink={path}
                pseudo={pseudo}
                region={region}
                />
                ))}
            </>
          ) : (
            
            <>
            </> */}
          )}
    
    
        </div>
    );
};

export default Friends;