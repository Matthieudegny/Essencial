// == Imports
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MinCard from "./MinCard";
import { actionGetAllVillages } from '../actions/getAll';
import '../styles/viewVillage.scss'



const ViewVillage = () => {

  //Ce Hook permet simplement de récupérer la fonction dispatch au sein de notre composant afin de pouvoir dispatch des actions Redux.
  const dispatch = useDispatch();
  //useSelector va nous permettre de récupérer une valeur du store Redux.
  const villageArray = useSelector((state) => state.allUsers.allVillages);
  console.log(villageArray);
  console.log(villageArray[0]);

 


  //On utilise ce Hook pour indiquer à React que notre composant doit exécuter quelque chose après chaque affichage. 
  //React enregistre la fonction passée en argument (que nous appellerons « effet »), et l'appellera plus tard, après avoir mis à jour le DOM.
  useEffect(() => {
    dispatch(actionGetAllVillages());
  }, [])

  return (
    <div className="viewVillage" >

      {villageArray ? (
        <>
          {villageArray.map(({
            id, path, name, region, 
          }) => (

            <MinCard
              imageLink={path}
              name={name}
              region={region}
              id={id}
              key={id}
            />

          ))}
        </>
      ) : (

        <>
        </>

      )}



    </div>
  );
};

export default ViewVillage;