// == Imports
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MinCardTutos from "./MinCardTutos";
import { actionGetAllTutos, actionGetAllPosts} from '../actions/getallposts';
import '../styles/viewTutos.scss'



const ViewTutos = () => {

  const allTutosArray = useSelector((state) => state.allposts.allTutos);
  console.log("tutosArray viewtutos",allTutosArray);
  //Ce Hook permet simplement de récupérer la fonction dispatch au sein de notre composant afin de pouvoir dispatch des actions Redux.
  const dispatch = useDispatch();
  //useSelector va nous permettre de récupérer une valeur du store Redux.
  
  
  //console.log("tuto1",allTutosArray[0]);

 


  //On utilise ce Hook pour indiquer à React que notre composant doit exécuter quelque chose après chaque affichage. 
  //React enregistre la fonction passée en argument (que nous appellerons « effet »), et l'appellera plus tard, après avoir mis à jour le DOM.
  useEffect(() => {
    dispatch(actionGetAllTutos(allTutosArray));
    dispatch(actionGetAllPosts());
  }, [])

  return (
    <div className="viewTutos" >
      <h1>ViewTutos</h1>
    {allTutosArray ? (
        <>
          {allTutosArray.map(({
            id, path, title, 
          }) => (

            <MinCardTutos
              imageLink={path}
              title={title}
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

export default ViewTutos;