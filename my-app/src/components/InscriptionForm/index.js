import Field from './Field';
import '../../styles/InscriptionForm';


function InscriptionForm({
  last_name,
  first_name,
  email,
  pseudo,
  password,
  address,
  zip_code,
  city,
  region,
  path,
  changeField, // (value, inputName = ["nom","prenom"]) => {}
  handleForm,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleForm();
  };
  //const [isswitch,setSwitch] = useState(true);
  
  return (
    <div className="form-container">

      <div className="login-form-particular">

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="last_name"
            placeholder="Nom"
            onChange={changeField}
            value={last_name}
          />
          <Field
            name="first_name"
            placeholder="Prenom"
            onChange={changeField}
            value={first_name}
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

    </div>


  );
}

InscriptionForm.propTypes = {
 /*  last_name_manager: PropTypes.string.isRequired,
  first_name_manager: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date_of_birth_manager: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired, */
};



export default InscriptionForm;
