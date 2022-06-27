import PropTypes from 'prop-types';
//import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { actionDeleteFriend } from "../../actions/deleteFriend";
import jwt_decode from "jwt-decode";

function HeartForm({
 id,
}) {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    //console.log("je passe par handleHeart","mon id ->",id);
    const token = localStorage.getItem('token');
    const user = jwt_decode(token);
    const idToken = user.id
    const idUser = idToken.toString()
    //console.log(idUser)
    dispatch(
      // on envoie mon action submitFriend au middleware, pour qu'il declenche la requete d'ajout
      actionDeleteFriend(id,idUser)
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
         X
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

HeartForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


export default HeartForm;
