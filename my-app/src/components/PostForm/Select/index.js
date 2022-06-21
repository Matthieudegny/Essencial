// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
function Select({
  value,
  type,
  name,
  onChange,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `select-${name}`;

  return (
    <div className={value.length > 0 ? 'select select--has-content' : 'select'}>

      <select 
      onChange={handleChange}
      id={inputId} 
      name="category_1" 
      type={type} 
      className="select-category"
      value={value}
       >
        
        <option value="">--Choisissez une catégorie--</option>
        <option value="tutoriel">Tutoriel</option>
        <option value="maison">Maison</option>
        <option value="alimentation">Alimentation</option>
        <option value="gestion_de_l_eau">Gestion de l'eau</option>
        <option value="gestion_des_dechets">Gestion des déchêts</option>
        <option value="potager">Potager</option>
        <option value="energie">Energie</option>
      </select>

    </div>
  );
}

Select.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Select.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Select;