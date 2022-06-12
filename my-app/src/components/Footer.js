// == Imports
import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/footer.css';

const Footer = () => {

    return (
    <div className="Footer">
    
        <nav className="level">
            <p className="level-item has-text-centered">
                <NavLink to="/a-propos" >
                    <a className="link is-info">A propos</a>
                </NavLink>
                <img src={"/a-propos.png"} />
            </p>

            <p className="level-item has-text-centered">
            <NavLink to="/contact" >
                    <a className="link is-info">Contact</a>
                </NavLink>
                <img src={"/contact.png"} />
            </p>
                
            <p className="level-item has-text-centered">
                <NavLink to="/confidentialite" >
                    <a className="link is-info">Confidentialité</a>
                </NavLink>
                <p>
                <img src={"/politique-de-confidentialite.png"} />
                </p>
            </p>
        </nav>   
    </div>    
    );
};

export default Footer;