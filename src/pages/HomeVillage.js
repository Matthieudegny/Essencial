// == Imports
import React from "react";
import Caroussel from '../components/Caroussel';

const HomeVillage = () => {
    return (
        <div className="home" >

            <div className="App-main-page-caroussel">
                <Caroussel />
            </div>
 
            <div className="homeContent">
                Ici je suis sur ma page Home Eco-Village
            </div>

        </div>
    );
};

export default HomeVillage;

