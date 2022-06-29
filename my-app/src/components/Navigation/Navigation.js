// == Imports
import React from "react";
import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import essencialLogo from '../../media/essencialok.jpg'
import '../../styles/navigation.scss'
import { useDispatch, useSelector } from 'react-redux';
import { actionLogout } from '../../actions/user';


const Navigation = () => {
  //hook de react router permet de rediriger 
  const navigate = useNavigate();

  //je récupére le pseudo dans le state 
  const namenav = useSelector((state) => state.user.name);

  //je récupére le pseudo dans le state 
  const pseudonav = useSelector((state) => state.user.pseudo);

  /* console.log("bisous",pseudonav); */
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

  const handleLogout = () => {
    //console.log('"handlelogout log",handleLogout');
    dispatch(
      actionLogout(),
      navigate('/')
      // on envoie l'action LOGOUT au reducer pour qu'il remette tout à 0

    );
    //j'envoie une confirmation uniquement si isLogged istrue
    if (isLogged) window.alert("Vous êtes bien déconnecté")
  }


  return (

    <div className="nav">

      <div className="nav-logoConnexion">
          <i className="fas fa-user"></i>
          <div className="nav-logoConnexion-welcome">
            <div className="welcome">Bienvenue </div>
            <div className="name">{namenav}{pseudonav}</div>
          </div>
      </div>

      <div className="nav-logoTitle">
        <img className="nav-logoTitle-image" src={essencialLogo} alt="" />
      </div>

        {/* <div className="nav-main-input-container">
          <form className="nav-main-input-container-form" action="" onSubmit={handleSubmit}>
            <input
              onChange={handleSearchChange}
              onSubmit={handleSubmit}
              className="nav-main-input--container-form-input"
              type="text"
              placeholder="Recherche" />
          </form>
        </div> */}

      <div className="nav-logoLinks-container">

        {isLogged ? (
          <NavLink to="/accueil">
            <i className="fa fa-home mt-1"></i>
          </NavLink>
        ) : (
          <NavLink to="/">
            <i className="fa fa-home mt-1"></i>
          </NavLink>
        )}


        {isLogged ? (
          <NavLink to="/ajouter-un-post">
            <i className="fa fa-edit mt-1 nav-logoLinks-item"></i>
          </NavLink>
        ) : (
          ''
          )}

        <div className="menu-burger">

          {/*  A ESSAYER PLUS TARD  style={{display: !isLogged ? 'none' : ''}} */}

          <button
            // onClick={handleClickBurger}
            onMouseEnter={() => setIsActiveBurger(true)}
            onMouseLeave={() => setIsActiveBurger(false)}
            className={`menu-burger-button ${isLogged ? 'menu-burger-activated' : ''}`}>
            <i className="fa fa-solid fa-bars mt-1 menu-burger-button-item"></i>
            {/* <i className={`menu-burger-button-item ${isActiveBurger ? 'fa fa-times' : 'fa fa-solid fa-bars mt-1'}`}></i>  */}
          </button>
          <ul
            onMouseEnter={() => setIsActiveBurger(true)}
            onMouseLeave={() => setIsActiveBurger(false)}
            className={`menu-burger-ul ${isActiveBurger ? 'menu-burger-ul-active' : ''}`}>


            {isLogged ? (
              <NavLink to="/gestion-de-profil">
                <li className="menu-burger-li">Gestion de profil</li>
              </NavLink>
            ) : (
              ''
              )}

            <NavLink to="/tutos">
              <li className="menu-burger-li sideBar">Tutoriel</li>
            </NavLink>
            <NavLink to="/amis">
              <li className="menu-burger-li sideBar">Amis</li>
            </NavLink>
            <NavLink to="/ecoVillages">
              <li className="menu-burger-li sideBar">Les éco-villages</li>
            </NavLink>

            {isLogged ? (
              <li
                onClick={handleLogout}
                className="menu-burger-li">Se déconnecter</li>
            ) : (
              ''
              )}

          </ul>

        </div>

        </div>

    </div>


  );
};

export default Navigation;