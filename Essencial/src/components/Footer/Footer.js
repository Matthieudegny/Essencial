// == Imports
import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/footer.scss'

const Footer = () => {

    return (
    <div className="Footer">
        <div className="Footer-items">
            <NavLink to="/a-propos" > 
                <span>A propos</span>
            </NavLink>
        </div>
        <div className="Footer-items">
            <NavLink to="/contact" > 
                <span>Contact</span>
            </NavLink>
        </div>
        <div className="Footer-items"> 
            <NavLink to="/confidentialite" > 
                <span>Confidentialité</span>
            </NavLink></div>
    </div>    
    );
};

export default Footer;