// == Imports
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MinCard from "./MinCard";
import { actionGetAllUsers } from '../actions/getAll';
import '../styles/friends.scss'

const Friends = () => {

  const usersArray = useSelector((state) => state.allUsers.allUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetAllUsers());
  }, [])
//console.log(usersArray);
  return (
    <div className="friends"  >
<h1>ViewFriends</h1>
      {usersArray ? (
        <>
          {usersArray.map(({
            id, path, pseudo, region
          }) => (
            <div className="container-mincard" key={id}>

              <MinCard
                imageLink={path}
                pseudo={pseudo}
                region={region}
                id={id}

              />
            </div>


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