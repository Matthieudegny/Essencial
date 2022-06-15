import { useSelector, useDispatch } from 'react-redux';
import InscriptionForm from '../InscriptionForm';
import { actionChangeFormField, actionSubmitForm } from '../../actions/inscription';
import './style.scss';



function AppInscriptionForm() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.inscription.name);
  const firstname = useSelector((state) => state.inscription.firstname);
  const email = useSelector((state) => state.inscription.email);
  const pseudo = useSelector((state) => state.inscription.pseudo);
  const password = useSelector((state) => state.inscription.password);
  const address = useSelector((state) => state.inscription.address);
  const zip_code = useSelector((state) => state.inscription.zip_code);
 /*  const state = useSelector((state) => state.inscription.state); */
  const path = useSelector((state) => state.inscription.path);

  return (
    <header className="header">

      {/* ! info a supprimer si tout est ok ! name, firstname, email, pseudo, password, address, zipcode, state, path */}

      <InscriptionForm
        name={name}
        firstname={firstname}
        email={email}
        pseudo={pseudo}
        password={password}
        address={address}
        zip_code={zip_code}
        /* state={state} */
        path={path}
        changeField={(value, inputName) => {
          //console.log('changeField', { value, inputName });
          dispatch(
            actionChangeFormField(value, inputName),
          );
        }}
        handleForm={() => {
          console.log('handleForm');
          dispatch(
            actionSubmitForm(),
            // on envoie mon action submitForm au middleware, pour qu'il declenche la requete d'inscription
          );
        }}

      />
    </header>
  );
}

export default AppInscriptionForm;
