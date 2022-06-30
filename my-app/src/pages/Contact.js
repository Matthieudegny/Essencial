// == Imports
import React from "react";
import "../styles/contact.scss";

const Contact = () => {
    return (
        < div className="home-contact" >

            <h1 className="home-contact-title">Restons en contact</h1>

            <form className="home-contact-form" name="contact" method="post">

                <input className="home-contact-form-inputs" type="text" placeholder="Prénom" name="first_name" />
            
            
                <input className="home-contact-form-inputs" type="text" placeholder="Nom de famille" name="last_name" />              

            
                <input className="home-contact-form-inputs" type="email" placeholder="Email" name="email" />
        
            
                <textarea className="home-contact-form-textArea" name="message" placeholder="Votre message" rows="10" cols="43"></textarea>
            
            
                <button className="home-contact-form-button" type="submit">Envoyer</button>
               

            </form>

        </div>

    );
};

export default Contact;

