import PropTypes from 'prop-types';

import Field from './Field';

import './style.scss';

function InscriptionForm({
  name,
  firstname,
  email,
  pseudo,
  password,
  address,
  zip_code,
  path,
  changeField, // (value, inputName = ["nom","prenom"]) => {}
  handleForm,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleForm();
  };

  return (
    <div className="login-form">

      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <Field
          name="name"
          placeholder="Nom"
          onChange={changeField}
          value={name}
        />
        <Field
          name="firstname"
          placeholder="Prenom"
          onChange={changeField}
          value={firstname}
        />
        <Field
          name="email"
          placeholder="Email"
          onChange={changeField}
          value={email}
        />
         <Field
          name="pseudo"
          placeholder="Pseudo"
          onChange={changeField}
          value={pseudo}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
         <Field
          name="address"
          placeholder="Adresse"
          onChange={changeField}
          value={address}
        />
         <Field
          name="zip_code"
          placeholder="Zip_code"
          onChange={changeField}
          value={zip_code}
        />
       {/*  <Field
          name="state"
          placeholder="Region"
          onChange={changeField}
          value={state}
        /> */}
          <Field
          name="path"
          placeholder="Url_image"
          onChange={changeField}
          value={path}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          Ajouter l'utilisateur
        </button>
      </form>

    </div>
  );
}

InscriptionForm.propTypes = {
  name: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired, 
  zip_code: PropTypes.string.isRequired,
  /* state: PropTypes.string.isRequired, */
  path: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
   handleForm: PropTypes.func.isRequired, 
};



export default InscriptionForm;
