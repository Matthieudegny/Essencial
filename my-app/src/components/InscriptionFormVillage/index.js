import PropTypes from 'prop-types';
import * as dayjs from 'dayjs'
import Field from '../../styles/Field.scss';

import '../../styles/InscriptionFormVillage.scss';


function InscriptionFormVillage({
  name,
  path,
  description,
  website,
  address,
  zip_code,
  city,
  region,
  last_name_manager,
  first_name_manager,
  date_of_birth_manager,
  phone_number,
  email,
  password,
  changeField, // (value, inputName = ["nom","prenom"]) => {}
  handleForm,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleForm();
  };
  //const [isswitch,setSwitch] = useState(true);

  return (
    
      <div className="login-form-village">

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>

          <Field
            name="name"
            placeholder="Nom de l'Écovillage"
            onChange={changeField}
            value={name}
          />
          <Field
            name="path"
            placeholder="Url_image"
            onChange={changeField}
            value={path}
          />
          <Field
            name="description"
            placeholder="Description de l'Écovillage"
            onChange={changeField}
            value={description}
          />
          <Field
            name="website"
            placeholder="adresse internet du site"
            onChange={changeField}
            value={website}
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
          <Field
            name="city"
            placeholder="Ville"
            onChange={changeField}
            value={city}
          />
          <Field
            name="region"
            placeholder="Region"
            onChange={changeField}
            value={region}
          />

          <Field
            name="last_name_manager"
            placeholder="Nom du manager"
            onChange={changeField}
            value={last_name_manager}
          />
          <Field
            name="first_name_manager"
            placeholder="Prenom du manager"
            onChange={changeField}
            value={first_name_manager}
          />
          <Field
            type="date"
            name="date_of_birth_manager"
            placeholder="date de naissance du manager"
            onChange={changeField}
            value={dayjs(date_of_birth_manager).format("YYYY-MM-DD")}
          />
          <Field
            name="phone_number"
            placeholder="numéro de téléphone"
            onChange={changeField}
            value={phone_number}
          />
          <Field
            name="email"
            placeholder="Email"
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
            Ajouter l'utilisateur
          </button>
        </form>

      </div>

    


  );
}

InscriptionFormVillage.propTypes = {

  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  last_name_manager: PropTypes.string.isRequired,
  first_name_manager: PropTypes.string.isRequired,
  date_of_birth_manager: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
};



export default InscriptionFormVillage;
