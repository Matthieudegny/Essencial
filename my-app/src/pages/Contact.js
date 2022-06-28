// == Imports
import React from "react";
import "../styles/contact.scss";

const Contact = () => {
    return (
        < div className="home-contact" >
            <form name="contact" method="post">

                <h1 className="contact-title">Restons en contact</h1>
                <p>
                    <input type="text" placeholder="Prénom" name="first_name" />
                </p>
                <p>
                    <input type="text" placeholder="Nom de famille" name="last_name" />
                </p>

                <p>
                    <input type="email" placeholder="Email" name="email" />
                </p>
                <br/>
                <p>
                    <textarea name="message" placeholder="Votre message" rows="10" cols="43"></textarea>
                </p>
                <br/>
                <p>
                    <button type="submit">Envoyer</button>
                </p>

            </form>

        </div>

    );
};

export default Contact;

