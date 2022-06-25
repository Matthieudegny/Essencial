// == Imports
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/viewUser.scss'
// import '../styles/viewUser.scss'

function ViewUser()  {

  const usersArray = useSelector((state) => state.allUsers.allUsers);
  const [user, setUser] = useState('')
  // console.log(usersArray)

  let { userId } = useParams();
  let test = +userId
  //console.log(typeof(test))

  useEffect(() => {
    const user = usersArray.find((testedUser) => {
      return testedUser.id === test
    })
    setUser(user)
   //remplacer find par une requête user/id
  },[userId])

  //console.log("viewuser userId =",userId)

    return (
        <div className="viewUser" >

          {user && (
            <>
              <img src={user.path} alt="user" />
              {/* <h1>First Name = {user.first_name}</h1>
              <h1>Last Name = {user.last_name}</h1> */}

              <h1>Pseudo = {user.pseudo}</h1>
              <h2>Region = {user.pseudo} </h2>
              <h3>Description = {user.description} </h3>

            </>
          )}

        </div>
    );
};

export default ViewUser;