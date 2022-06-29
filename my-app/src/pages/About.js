// == Imports
import React from "react";
import "../styles/about.scss";
import team from '../media/team.jpg';



const About = () => {
    return (
        <div className="home-about" >

        

        <img src= {team}  className="team" alt="les4fantastiques" />
            <p>
                Essencial a été créé en mai 2022 par Stéphanie , Matthieu , Arthur et Emmanuel avec le désir d'offrir une plateforme d'échange
                au personnes souhaitant se reconnecter avec la nature et l'humain .
            </p>
            <p>
                Aujourd’hui notre planète s’essouffle un peu plus chaque jour et la remise en question de notre mode de vie est devenue une évidence.
            </p>
            <p>
                Redonnez du sens à notre life style et reconnectez- vous vraiment avec les autres et avec la nature.
            </p>
            <p>
                Ensemble partageons et grandissons pour construire dès maintenant un monde meilleur Bref revenons vers l’essentiel !  
                le premier réseau social d'entraide visant à un retour vers une plus grande autonomie et le respect de notre planète.
            </p>
            <p>
                Les 4 fantastiques ont mis leurs compétences et tout leur amour pour vous présenter aujourd'hui Essencial
            </p> 
        </div>
    );
};

export default About;

