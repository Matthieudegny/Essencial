// == Imports
import React from "react";
import '../styles/homeInscription.scss';



const HomeInscription = () => {
    return (
        <div  >
            <form className="inscription-form" >
                <label >
                Nom :
                <input type="text" name="name" />
                </label>

                <label>
                Prénom :
                <input type="text" name="name" />
                </label>

                <label>
                Email :
                <input type="text" name="name" />
                </label>

                <label>
                Pseudo :
                <input type="text" name="name" />
                </label>

                <label>
                Mot de passe :
                <input type="text" name="name" />
                </label>

                <label>
                Adresse :
                <input type="text" name="name" />
                </label>

                <label>
                Code postal :
                <input type="text" name="name" />
                </label>

                <label>
                Région :
                <input type="text" name="name" />
                </label>

                <label>
                Url Image :
                <input type="text" name="name" />
                </label>


                <input type="submit" value="Envoyer" />
            </form>

        </div>
      
       
    ) 
};

export default HomeInscription;
