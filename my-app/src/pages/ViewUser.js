// == Imports
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findUser } from '../selectors/user';
// import '../styles/viewUser.scss'

function ViewTutos()  {

  const usersArray = useSelector((state) => state.allUsers.allUsers);
  const [user, setUser] = useState('')
  // console.log(usersArray)

  let { userId } = useParams();
  let test = +userId
  console.log(typeof(test))

  useEffect(() => {
    const user = usersArray.find((testedUser) => {
      return testedUser.id === test
    })
    setUser(user)
   
  },[userId])

    return (
        <div className="viewUser" >

          {user && (
            <>
              <img src={user.path} alt="user" />
              <h1>First Name = {user.first_name}</h1>
              <h1>Last Name = {user.last_name}</h1>
              <h1>Pseudo = {user.pseudo}</h1>
            </>
          )}

         

        </div>
    );
};

export default ViewTutos;