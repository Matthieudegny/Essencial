// == Imports
import React from "react";
import essencialLogo from '../media/essencial.svg';
import '../styles/homeConnexion.scss';
const HomeConnexion = () => {
   /*  const [searchValue, setSearchValue] = useState('');

    //à la modification de l'input, sa valeur est enregisrée dans le hook d'état searchValue
    const handleSearchChange = (event) => {
      const { value } = event.target;
      setSearchValue(value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      //je n'ai pas encore géré l'envoi du data (celui de l'input) utilise on redux? ou props?
      //react rooter hook
      navigate('/recherche');
    } */
    return (
        <div className="homeConnexion" >

            <div className="homeConnexion-form">
                <form>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
                </form>
            </div>

            <div className="homeConnexion-logo">
                <img src={essencialLogo} alt="" />
            </div>

            <div className="homeConnexion-visiteur">
                <h2>Accès Simple Visiteur</h2>
                <p> Vous n'aurez pas la possibilité de partage sur notre site c'est bien dommage </p>
            </div>


        </div>
    );
};

export default HomeConnexion;
