// == Imports
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MinCardDelete from "./MinCardFriendDelete";
import { actionGetAllUsers, actionGetAllFriends } from '../actions/getAll';
import '../styles/friends.scss'


const Friends = () => {

  const dispatch = useDispatch();

  const [friends,setFriends] = useState('')

  const listFriends = useSelector((state) => state.allUsers.allFriends);
 
  const idUser = useSelector((state) => state.updateReducer.id);
 
  useEffect(()=> {
    //console.log(idUser)
    if(idUser){
      dispatch(actionGetAllFriends(idUser))
    }
  },[idUser])
  
 
  useEffect(() => {
    setFriends(listFriends)
  },[listFriends])


  return (
    <div className="friends"  >

<h1>ViewFriends</h1>
      {friends ? (

        <>
          {friends.map(({
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