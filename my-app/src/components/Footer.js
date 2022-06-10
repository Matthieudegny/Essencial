// == Imports
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
    <div className="Footer">
        <ul>
            <li>
                <NavLink to="/a-propos" > 
                    <span>A propos</span>
                </NavLink>
            </li>

            <li>
                <NavLink to="/contact" > 
                    <span>Contact</span>
                </NavLink>
            </li>

            <li>
                <NavLink to="/confidentialite" > 
                    <span>Confidentialité</span>
                </NavLink>
            </li>
        </ul>
    </div>    
    );
};

export default Footer;