import PropTypes from 'prop-types';
import './style.scss';
import { useSelector } from 'react-redux';

function HeartForm({
  handleHeart,

}) {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleHeart();
 
  };

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
  handleHeart: PropTypes.func.isRequired,
};

export default HeartForm;