// == Imports
import React from "react";
import {useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import essencialLogo from '../media/essencial.svg'
import '../styles/navigation.scss'



const Navigation = () => {

  //hook de react router permet de rediriger 
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');

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
  }

  return (
  
  <div className="nav">

    <div className="nav-logoTitle">
      <img className="nav-logoTitle-image" src={essencialLogo} alt="" />
    </div>

    <div className="nav-input-container">
      <form action=""  onSubmit={handleSubmit}>
        <input 
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
        className="nav-input" 
        type="text" 
        placeholder="Recherche"  />
      </form>
    </div>

    <div className="nav-logoLinks-container">

      <NavLink to="/">
        <i className="fa fa-home mt-1"></i>
      </NavLink>

      <NavLink to="/ajouter-un-post">
        <i className="fa fa-edit mt-1 "></i>
      </NavLink>

      <i className="fa-solid fa-bars"></i>

    

    </div>

    <div className="nav-logoConnexion">
      <i className="fas fa-user"></i>
      Bienvenue pseudo
    </div>

   
    

    </div>

  );
};

export default Navigation;