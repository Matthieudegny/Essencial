// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import '../../../styles/Field.scss';

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
        
        <option value="">Choisissez une catégorie</option>
        <option value="Tutoriel">Tutoriel</option>
        <option value="Maison">Maison</option>
        <option value="Alimentation">Alimentation</option>
        <option value="Gestion de l'eau">Gestion de l'eau</option>
        <option value="Gestion des déchêts">Gestion des déchêts</option>
        <option value="Potager">Potager</option>
        <option value="Energie">Energie</option>
      </select>
      {/* const categories = ["Tutoriel","Maison", "Alimentation", "Gestion de l'eau", "Gestion des déchêts", "Potager", "Energie"]; */}
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