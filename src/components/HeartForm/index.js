import PropTypes from 'prop-types';
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { actionSubmitFriend } from "../../actions/addfriend";

function HeartForm({
  handleHeart,
}) {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    console.log("je passe par handleHeart !!");
    evt.preventDefault();
    handleHeart();
    dispatch(
      // on envoie mon action submitFriend au middleware, pour qu'il declenche la requete d'ajout
      actionSubmitFriend()
    );
  };

  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <div className="heart-formule">
      {isLogged ? (
        <button
          type="submit"
          onClick={handleSubmit}
          className="login-form-button"
        >
          <i className="fas fa-heart heart"></i>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

HeartForm.propTypes = {
  handleHeart: PropTypes.func.isRequired,
};


export default HeartForm;
