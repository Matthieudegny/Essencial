// == Imports
import React from "react";
import {useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import essencialLogo from '../media/essencial.svg'
import '../styles/navigation.scss'
import { useDispatch, useSelector } from 'react-redux';
import { actionLogout } from '../actions/user';

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

  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const isLogged = useSelector((state) => state.user.isLogged);

  const dispatch = useDispatch();

  const handleLogout= () => {
    console.log('handleLogout');
    dispatch(
      actionLogout(),
      // on envoie l'action LOGOUT au reducer pour qu'il remette tout à 0
    );
    //j'envoie une confirmation uniquement si isLogged istrue
    if(isLogged)window.alert("Vous êtes bien déconnecté")
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
        <i className="fa fa-edit mt-1 nav-logoLinks-item"></i>
      </NavLink>

      <div 
      onMouseEnter={() => setIsActiveBurger(true)}
      onMouseLeave={() => setIsActiveBurger(false)}
      className="menu-burger">
        <button  
        // onClick={handleClickBurger}
        onMouseEnter={() => setIsActiveBurger(true)}
        onMouseLeave={() => setIsActiveBurger(false)}
        className="menu-burger-button">
          <i className="fa fa-solid fa-bars mt-1 menu-burger-button-item"></i> 
        </button>
          <ul 
          onMouseEnter={() => setIsActiveBurger(true)}
          onMouseLeave={() => setIsActiveBurger(false)}
          className={`menu-burger-ul ${isActiveBurger ? 'menu-burger-ul-active' : '' }`}>
            <NavLink to="/gestion-de-profil">
              <li className="menu-burger-li">Gestion de profil</li>
            </NavLink>
            <NavLink to="/tutos">
              <li className="menu-burger-li sideBar">Tutoriel</li>
            </NavLink>
            <NavLink to="/amis">
              <li className="menu-burger-li sideBar">Amis</li>
            </NavLink>
            <NavLink to="/eco-village-vue">
              <li className="menu-burger-li sideBar">Les éco-villages</li>
            </NavLink>
            <li 
            onClick={handleLogout}
            className="menu-burger-li">Se déconnecter</li>
           
          </ul>

      </div>      
    </div>

    <div className="nav-logoConnexion">
      <i className="fas fa-user"></i>
      Bienvenue pseudo
    </div>

   
    

    </div>
  

  );
};

export default Navigation;