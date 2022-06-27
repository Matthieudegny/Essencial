Propisition:

sur le principe du Don't Repeat Yourself,
possibilité dans le fichier App.js d'implémenter directement les composants fixes Footer, Navigation, et SideBar
permettant de ne pas avoir à rappler dans chaque page ces derniers, ex:

Version d'origine ->

    ``// == Imports
    import React from "react";
    //Components
    import Navigation from "../components/Navigation";
    import Sidebar from "../components/Sidebar";
    import Footer from "../components/Footer";
    const About = () => {
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
                        Ici je suis sur ma page About
                    </div>
            <Footer />

        </div>
    );
    };
    export default About;``

version en chargeant directement les composants fixes à la base app ->

    ``// == Imports
    import React from "react";
    const About = () => {
        return (
            <div className="home" >
        
                <div className="homeContent">
                    Ici je suis sur ma page About
                </div>

            </div>
        );
    };
    export default About;``


Vous pouvez faire un npm start,
pour visualiser, les parties du DOM virtuel changeantes sont celles dans la aprtie grisée