// == Imports
import React from "react";
import { useSelector } from "react-redux";

// data, styles et utilitaires
import '../styles/caroussel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MinCard from "../pages/MinCard";


const Caroussel = () => {

  //useSelector va nous permettre de récupérer une valeur du store Redux.
  const villageArray = useSelector((state) => state.allUsers.allVillages);
  const usersArray = useSelector((state) => state.allUsers.allUsers);
  //console.log(villageArray[0]);//console.log(membersArray[0]);
 // console.log("usersArray --->" , usersArray)
  //console.log("villageArray --->" ,villageArray)

   const villageAndUserArray = []

  for(let i=0; i < (villageArray.length + usersArray.length ); i++){
    //console.log("usersArray --->" , usersArray.length)
    //console.log("villageArray --->" ,villageArray.length)
      if(i%2 == 0){
          villageAndUserArray.push(villageArray[i])
         // console.log("je passe dans le %2 == 0")
      } else {
          villageAndUserArray.push(usersArray[i])
         // console.log("je passe dans le else")
      }
  } 
  
/*  //fisher method
//on assemble les tableaux en un seul avec le .concat 
  const tableaucaroussel= villageArray.concat(usersArray);
  //console.table(tableaucaroussel);
  console.log(tableaucaroussel);

  function shuffleArray(tableaucaroussel) {
    for (let i = tableaucaroussel.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableaucaroussel[i], tableaucaroussel[j]] = [tableaucaroussel[j], tableaucaroussel[i]];
    }
} 
shuffleArray( tableaucaroussel); */


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
    // const items = []

    // for (let i = 0; i < 1; i++) {
    //     items.push(< MinCard key={i} />)
    // }


/* {usersArray ? (
            <>
              {usersArray.map(({
                id, path, pseudo, region
              }) => (

                  <MinCard                
                    imageLink={path}
                    pseudo={pseudo}
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
          */



    return (
        <div className="caroussel" >
           
            <Slider {...settings}>
                {/* <div>
                    <h3>{items}</h3>
                </div>
                <div>
                    <h3>{items}</h3>
                </div>
                <div>
                    <h3>{items}</h3>
                </div>
                <div>
                    <h3>{items}</h3>
                </div>
                <div>
                    <h3>{items}</h3>
                </div>
                <div>
                    <h3>{items}</h3>
                </div> */}
                {villageAndUserArray.map(({
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