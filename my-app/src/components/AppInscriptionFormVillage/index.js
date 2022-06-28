import { useSelector, useDispatch } from 'react-redux';
import InscriptionFormVillage from '../InscriptionFormVillage';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../../styles/AppInscriptionFormVillage.scss';
import { actionSubmitFormVillage, actionChangeFormFieldVillage } from '../../actions/inscriptionvillage';


function AppInscriptionFormVillage() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.inscriptionvillage.name);
  const path = useSelector((state) => state.inscriptionvillage.path);
  const description = useSelector((state) => state.inscriptionvillage.description);
  const website = useSelector((state) => state.inscriptionvillage.website);
  const address = useSelector((state) => state.inscriptionvillage.address);
  const zip_code = useSelector((state) => state.inscriptionvillage.zip_code);
  const city = useSelector((state) => state.inscriptionvillage.city);
  const region = useSelector((state) => state.inscriptionvillage.region);
  const last_name_manager = useSelector((state) => state.inscriptionvillage.last_name_manager);
  const first_name_manager = useSelector((state) => state.inscriptionvillage.first_name_manager);
  const date_of_birth_manager = useSelector((state) => state.inscriptionvillage.date_of_birth_manager);
  const phone_number = useSelector((state) => state.inscriptionvillage.phone_number);
  const email = useSelector((state) => state.inscriptionvillage.email);
  const password = useSelector((state) => state.inscriptionvillage.password);
  
  const [redirect, setredirect] = useState(false);

  //hook de react router pour rediriger
  const navigate = useNavigate();
 
  //useEffect qui se déclenche uniquement qd la veleur isLogged change et redirect est true
  useEffect(() => {
    if(redirect)navigate('/')
  });



  return (
    <header className="header">

      <InscriptionFormVillage
        name={name}
        path={path}
        description={description}
        website={website}
        address={address}
        zip_code={zip_code} 
        city={city}
        region={region} 
        last_name_manager={last_name_manager}
        first_name_manager={first_name_manager}
        date_of_birth_manager={date_of_birth_manager}
        phone_number={phone_number}
        email={email}
        password={password}
        changeField={(value, inputName) => {
          //console.log('changeField', { value, inputName });
          dispatch(
            actionChangeFormFieldVillage(value, inputName),
          );
        }}
        handleForm={() => {
          //console.log('handleForm');
          dispatch(
            actionSubmitFormVillage(),
            // on envoie mon action submitForm au middleware, pour qu'il declenche la requete d'inscription
          );
          //je modifie l'état de redirect qui permet au cas ou le isLogged est modifié de permettre le navigate (useEffect)
          setredirect(true)
        }}

      />
    </header>
  );
}

export default AppInscriptionFormVillage;
