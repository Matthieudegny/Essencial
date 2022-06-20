import { useSelector, useDispatch } from 'react-redux';
import InscriptionForm from '../InscriptionForm';

import { actionChangeFormField, actionSubmitForm } from '../../actions/inscription';
import './style.scss';



function AppInscriptionForm() {
  const dispatch = useDispatch();

  const last_name = useSelector((state) => state.inscription.last_name);
  const first_name = useSelector((state) => state.inscription.first_name);
  const email = useSelector((state) => state.inscription.email);
  const pseudo = useSelector((state) => state.inscription.pseudo);
  const password = useSelector((state) => state.inscription.password);
  const address = useSelector((state) => state.inscription.address);
  const region = useSelector((state) => state.inscription.region);
  const zip_code = useSelector((state) => state.inscription.zip_code);
  const city = useSelector((state) => state.inscription.city);
  const path = useSelector((state) => state.inscription.path);
  const name = useSelector((state) => state.inscription.name);
  const description = useSelector((state) => state.inscription.description);
  const first_name_manager = useSelector((state) => state.inscription.first_name_manager);
  const last_name_manager = useSelector((state) => state.inscription.last_name_manager);
  const date_of_birth_manager = useSelector((state) => state.inscription.date_of_birth_manager);
  const phone_number = useSelector((state) => state.inscription.phone_number);
  const website = useSelector((state) => state.inscription.website);
  
  return (
    <header className="header">

      

      <InscriptionForm
        name={name}
        description={description}
        last_name_manager={last_name_manager}
        first_name_manager={first_name_manager}
        date_of_birth_manager={date_of_birth_manager}
        website={website}
        phone_number={phone_number}
        last_name={last_name}
        first_name={first_name}
        email={email}
        pseudo={pseudo}
        password={password}
        address={address}
        region={region} 
        zip_code={zip_code} 
        city={city}
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
