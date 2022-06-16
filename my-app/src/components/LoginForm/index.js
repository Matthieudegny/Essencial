import PropTypes from 'prop-types';
import Field from './Field';
//import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import { useEffect } from 'react';

function LoginForm({
  email,
  password,
  changeField, // (value, inputName = ["email","password"]) => {}
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) {
  //const readytoberedirect = useSelector((state) => state.user.isLogged);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
    // if(readytoberedirect) console.log("prê à etre redirigé")
  };

  return (
    <div className="login-form">
      {isLogged && (


        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button> 
          
         </div>
      )}
      {!isLogged && (

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>

          <h2>Se connecter</h2>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            Valider
          </button>
        </form>
      )}
    </div>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
