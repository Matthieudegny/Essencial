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
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "25vw",
        slidesToShow: 3,
        speed: 550,
        arrows: true,
        

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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