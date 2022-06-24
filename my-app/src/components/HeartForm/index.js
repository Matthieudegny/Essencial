import PropTypes from 'prop-types';
import './style.scss';
import { useSelector } from 'react-redux';

function HeartForm({
  handleHeart,
  heartMessage,
}) 

{
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleHeart();
  }

const isLogged = useSelector((state) => state.user.isLogged);

  return ( 
            <div className = "heart-formule" >

                {
                  isLogged ? (

                    <button type = "submit"
                        onClick = {handleSubmit}
                        className = "login-form-button" >
                          <i className="fas fa-heart heart"></i>
                    </button>

                  ) : ('')
                } 
            </div>
           )
}

HeartForm.propTypes = {

  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

HeartForm.defaultProps = {
  isLogged: false,
  heartMessage: 'Vous êtes maintenant amis',
};

export default HeartForm;