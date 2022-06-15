import { useSelector, useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import { actionChangeLoginField, actionLogout, actionSubmitLogin } from '../../actions/user';
import './style.scss';



function AppHeader() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  // const { email } = useSelector((state) => state.user);
  const password = useSelector((state) => state.password);
  const isLogged = useSelector((state) => state.isLogged);

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
    </header>
  );
}

export default AppHeader;
