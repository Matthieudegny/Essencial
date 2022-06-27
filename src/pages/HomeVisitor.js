// == Imports
import React from "react";
import Caroussel from '../components/Caroussel';

const HomeVisitor = () => {
    return (
        <div className="home" >

                    <div className="App-main-page-caroussel">
                        <Caroussel />
                    </div>

                    <div className="homeContent">
                        Ici je suis sur ma page HomeVisitor
                    </div>

        </div>
    );
};

export default HomeVisitor;
