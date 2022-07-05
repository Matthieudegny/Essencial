import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, NavLink} from 'react-router-dom';
import React, { useState, useEffect  } from 'react';
import LoginForm from '../LoginForm';
import { actionChangeLoginField, actionSubmitLogin } from '../../actions/user';
import '../../styles/AppHeader.scss';



function AppHeader() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  // //const { email } = useSelector((state) => state.user);
  const password = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.isLogged);

  //hook pour enregistrer un état qui représente la condition si le use effect doit
  //se déclencher
  const [redirect, setredirect] = useState(false);

  //hook de react router pour rediriger
  const navigate = useNavigate();
 
  //useEffect qui se déclenche uniquement qd la veleur isLogged change et redirect est true
  useEffect(() => {
    if(redirect)navigate('/accueil')
  }, [isLogged]); 


  return (
    <header className="header">
      
      <LoginForm
        email={email}
        password={password}
        changeField={(value, inputName) => {
          //console.log('changeField', { value, inputName });
          dispatch(
            actionChangeLoginField(value, inputName),
          );
        }}
        handleLogin={() => {
          console.log('handleLogin');
          dispatch(
             // on envoie mon action submitLogin au middleware, pour qu'il declenche la requete de login
            actionSubmitLogin(),
          );
          //je modifie l'état de redirect qui permet au cas ou le isLogged est modifié de permettre le navigate (useEffect)
          setredirect(true)
        }}
        isLogged={isLogged}
      />
       <div className="inscription">
                <NavLink to="/accueil-inscription" > 
                 <span>S'inscrire</span>
                </NavLink>
        </div>
    </header>
  );
}

export default AppHeader;
