// == Imports
import React from "react";
import '../styles/homeLog.scss'
import Caroussel from "../components/Carroussel/Caroussel";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actionGetAllPosts} from '../actions/getallposts';
import MinCardPosts from "./MinCardPosts";


const HomeLog = () => {

    const allPostsArray = useSelector((state) => state.allposts.allPosts);
   // console.log("postsArray viewposts",allPostsArray);
    //Ce Hook permet simplement de récupérer la fonction dispatch au sein de notre composant afin de pouvoir dispatch des actions Redux.
    const dispatch = useDispatch();
    //useSelector va nous permettre de récupérer une valeur du store Redux.
    
    
    //console.log("tuto1",allTutosArray[0]);
  
   
  
  
    //On utilise ce Hook pour indiquer à React que notre composant doit exécuter quelque chose après chaque affichage. 
    //React enregistre la fonction passée en argument (que nous appellerons « effet »), et l'appellera plus tard, après avoir mis à jour le DOM.
    useEffect(() => {
      dispatch(actionGetAllPosts(allPostsArray));
      //dispatch(actionGetAllPosts());
    }, [])
  
 
 
    return (
        <div className="homeLog" >


       <div className="container-caroussel" >
<Caroussel />
       </div>

       <div className="viewPosts" >

    {allPostsArray ? (
        <>
          {allPostsArray.map(({
            photo_path, post_title,categories_name, post_id
          }) => (

            <MinCardPosts
              photo_path={photo_path}
              post_title={post_title}
              categories_name={categories_name}
              post_id={post_id}
              key={post_id}
            />

          ))}
        </>
      ) : (

        <>
        </>

      )}



    </div>


           

        </div>
    );
};

export default HomeLog;

