import PropTypes from 'prop-types';

import Field from './Field';
import Select from './Select';

import './style.scss';

function InscriptionForm({
  title,
  content,
  path,
  category_1,
  category_2,
  changeField, // (value, inputName = ["nom","prenom"]) => {}
  handleForm,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleForm();
  };

  return (
    <div className="login-form">

      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <Field
          name="title"
          placeholder="Titre"
          onChange={changeField}
          value={title}
        />
        <Field
          className="content"
          name="content"
          placeholder="post"
          onChange={changeField}
          value={content}
        />

        <Field
          name="path"
          placeholder="Url de votre image"
          onChange={changeField}
          value={path}
        />

        <Select
          name="category_1"
          value={category_1}
          onChange={changeField}
          placeholder="catégorie 1"
        />

        <Select
          name="category_2"
          value={category_2}
          onChange={changeField}
          placeholder="catégorie 2"
        />

        <button
          type="submit"
          className="login-form-button"
        >
          Validez votre post
        </button>
      </form>

    </div>
  );
}

InscriptionForm.propTypes = {

  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
 /*  category_1: PropTypes.string.isRequired,
  category_2: PropTypes.string.isRequired,  */
  changeField: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
};



export default InscriptionForm;
