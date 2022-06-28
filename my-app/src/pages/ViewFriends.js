// == Imports
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MinCardDelete from "./MinCardFriendDelete";
import { actionGetAllUsers, actionGetAllFriends } from '../actions/getAll';
import '../styles/friends.scss'
import jwt_decode from "jwt-decode";

const Friends = () => {

  const dispatch = useDispatch();

  const [friends,setFriends] = useState('')

  const listFriends = useSelector((state) => state.allUsers.allFriends);


  useEffect(() => {
    setFriends(listFriends)
  })


  return (
    <div className="friends"  >
      {listFriends ? (
        <>
          {listFriends.map(({
            id, path, pseudo, region
          }) => (
            <div className="container-mincard" key={id}>

              <MinCardDelete
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