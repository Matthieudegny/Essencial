// == Imports
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// data, styles et utilitaires
import '../../styles/caroussel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MinCard from "../../pages/MinCard";


const Caroussel = () => {

  //useSelector va nous permettre de récupérer une valeur du store Redux.
  const villageArray = useSelector((state) => state.allUsers.allVillages);
  const usersArray = useSelector((state) => state.allUsers.allUsers);


 
 //fisher method

//on assemble les tableaux en un seul avec le .concat 
  const tableaucaroussel= villageArray.concat(usersArray);
  //console.table(tableaucaroussel);
  //console.log("tableaucarousselconcat",tableaucaroussel);

  function shuffleArray(tableaucaroussel) {
    for (let i = tableaucaroussel.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableaucaroussel[i], tableaucaroussel[j]] = [tableaucaroussel[j], tableaucaroussel[i]];
    }
} 
shuffleArray( tableaucaroussel); 


//console.log("village & user array ---> " , villageAndUserArray)

    const settings = {
 
      centerMode: true,
      centerPadding: '30px',
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };


    return (
        <div className="caroussel" >
           
            <Slider {...settings}>
               
                {tableaucaroussel.map(({
                id, path, pseudo, region,name
              }) => (

                  <MinCard                
                    imageLink={path}
                    pseudo={pseudo}
                    name={name}
                    region={region}
                    id={id}
                    key={id}
                  />

                ))}
            </Slider>
        </div>
    );
}

export default Caroussel;