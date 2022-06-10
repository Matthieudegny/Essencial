// == Imports
import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";


const Home = () => {
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
                        Ici je suis sur ma page Home
                    </div>

        </div>
    );
};

export default Home;

