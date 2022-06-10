// == Imports
import React from "react";

//Components
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const ViewVillage = () => {
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
                        Ici je suis sur la vue Eco-Village
                    </div>

            <Footer />

        </div>
    );
};

export default ViewVillage;

