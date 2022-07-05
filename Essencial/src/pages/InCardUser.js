// == Imports
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/InCardUser.scss'


function InCardUser()  {

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
        <div className="in-card-user" >

          {user && (

            <>
              <div className="in-card-user-containerPhoto">
                <img src={user.path} className="in-card-user-containerPhoto-image" alt="user" />
              </div>

              <div className="in-card-user-containerInfo">
                <h1 className="in-card-user-containerInfo-pseudo">{user.pseudo}</h1>
                <h2 className="in-card-user-containerInfo-region">{user.region} </h2>
                {/* <h1>First Name = {user.first_name}</h1>
                <h1>Last Name = {user.last_name}</h1> */}
                
                <h3 className="in-card-user-containerInfo-description"> {user.description} </h3>
              </div>
             


            </>
          )}

        </div>
    );
};

export default InCardUser;