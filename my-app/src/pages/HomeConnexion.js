// == Imports
import React from "react";

//Components
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";


const HomeConnexion = () => {
    return (
        <div className="home" >
            <div className="mainbarContainer">
                <Navigation />
            </div>
            <br />
                <div className="sidebarContainer" >
                    <Sidebar />
                </div>
                <br />
                    <div className="homeContent">
                        Ici je suis sur ma page HomeConnexion
                    </div>

        </div>
    );
};

export default HomeConnexion;
