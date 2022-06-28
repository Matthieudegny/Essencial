import PropTypes from 'prop-types';
import Field from './Field';
import '../../styles/LoginForm';


function LoginForm({
  email,
  password,
  changeField, // (value, inputName = ["email","password"]) => {}
  handleLogin,
  isLogged,
  loggedMessage,
}) {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (

        <div>
          <p>
            Vous êtes bien connecté
          </p>
          
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
  //email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
