// == Imports
import React from "react";
import '../styles/confidentiality.scss' ;
import brancheok from '../media/brancheok.jpg';

const Confidentiality = () => {
    return (

        <div className="confidentiality">
     
            <div className="confidentiality-left">
                
                <img src={ brancheok  } className="confidentiality-left-logo" alt="logo" />
            </div>

            <div className="confidentiality-right">

                <h1 className="confidentiality-right-title">   Politique de confidentialité</h1>

                <p>
                    Cette page est utilisée pour informer les visiteurs du site Web de nos politiques en matière de collecte,
                    d'utilisation et de divulgation des informations personnelles si quelqu'un décide d'utiliser notre service,
                    le site Web Essencial. <br/>
                    Si vous choisissez d'utiliser notre service, vous acceptez la collecte et l'utilisation d'informations en relation
                    avec cette politique. Les informations personnelles que nous recueillons sont utilisées pour fournir et améliorer 
                    le service. Nous n'utiliserons ni ne partagerons vos informations avec quiconque, sauf dans les cas décrits dans la
                     présente politique de confidentialité.
                    Les termes utilisés dans la présente politique de confidentialité ont la même signification que dans nos conditions générales,
                     qui sont accessibles à l'adresse <strong>https://www.essencial.com</strong>, sauf définition contraire dans la présente politique de confidentialité.
                </p>
           
            </div>

        </div>

    );
};

export default Confidentiality;

