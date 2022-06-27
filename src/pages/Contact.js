// == Imports
import React from "react";

const Contact = () => {
    return (
        < div className="home-contact" >



            <form name="contact" method="post">

                <p>
                    <label>Nom: <input type="text" name="name" /></label>
                </p>

                <p>
                    <label>Email: <input type="email" name="email" /></label>
                </p>
                <br/>
                <p>
                    <label>Votre message: <textarea name="message"></textarea></label>
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

