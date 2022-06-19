import { useEffect, useState, useRef } from "react";

import './style.scss';



const Switch = () => {

  const [value, setValue] = useState(false);
  return (
    <>
    <p>Particulier</p>
      <input 
      
        checked={value}
        onChange={() => setValue(!value)}
        className="react-switch-checkbox "
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: value && '#86B19A' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      <p>Ecovillage</p>
    </>
  );
}

export default Switch;