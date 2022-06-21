// == Imports
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';


const UpdateProfil = () => {

    const email = useSelector((state) => state.user.email);
    const isLogged = useSelector((state) => state.user.isLogged);
    const villageArray = useSelector((state) => state.allUsers.allVillages);

    //je cérifies si cest un utilisateur classique ou eco village
    //je fais une comparaison avec la BDD ecoVillage car moins grande
    const village = villageArray.find((testedVillage) => {
              return testedVillage.email === email
    })
   
    if(village)console.log("maaatch ceci est un village")

    return (
        <div className="home" >

            {isLogged ? (

                <>
                
                {village ? (
                    
                    <div className="homeContent">
                    Ici je suis sur ma page UpdateProfil
                    je suis un eco village
                    </div>

                    ) : (
                        
                        <div className="homeContent">
                        Ici je suis sur ma page UpdateProfil
                        je suis un utilisateur
                        </div>
                )}
                </>
                        
            ) : (

                <>
                Veuillez vous connecter avant d'accéder à ce service
                </>

            )}
                  

        </div>
    );
};

export default UpdateProfil;

