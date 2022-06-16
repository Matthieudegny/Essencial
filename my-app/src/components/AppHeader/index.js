import { useSelector, useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import LoginForm from '../LoginForm';
import { actionChangeLoginField, actionLogout, actionSubmitLogin } from '../../actions/user';
import './style.scss';
import { NavLink } from "react-router-dom";


function AppHeader() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  // const { email } = useSelector((state) => state.user);
  const password = useSelector((state) => state.password);
  const isLogged = useSelector((state) => state.isLogged);

  const navigate = useNavigate();

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
            actionSubmitLogin(),
            navigate('/accueil-utilisateur-connecter')
            // on envoie mon action submitLogin au middleware, pour qu'il declenche la requete de login
          );
        }}
        handleLogout={() => {
          console.log('handleLogout');
          dispatch(
            actionLogout(),
            // on envoie l'action LOGOUT au reducer pour qu'il remette tout à 0
          );
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
