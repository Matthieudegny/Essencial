// == Imports
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect  } from 'react';
import MinCard from "./MinCard";
import { actionGetAllVillages } from '../actions/getAll';
import { NavLink } from "react-router-dom";
//import '../styles/friends.scss'

const EcoVillage = () => {

  const villageArray = useSelector((state) => state.allUsers.allVillages);
  

  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("je lance mon action getallvillages")
    dispatch(actionGetAllVillages());
  }, [])

  //console.log(villageArray)

    return (
        <div className="friends" >

          Ceci est un test 
          {/*           
          {usersArray ? (
            <>
              {usersArray.map(({
                id, path, pseudo, region
              }) => (
                <NavLink to={`/user-vue/${id}`} > 
                  {console.log(id)}
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

          )} */}
         
    
    
        </div>
    );
};

export default EcoVillage;