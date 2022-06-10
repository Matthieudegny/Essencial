// == Imports
import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const HomeLog = () => {
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
                        Ici je suis sur ma page HomeLog
                    </div>
            <Footer />

        </div>
    );
};

export default HomeLog;

