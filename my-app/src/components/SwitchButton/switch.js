/* import { useSelector, useState, } from "react-redux"; */
import '../../styles/switchButton.scss';




function Switch({isswitch, setSwitch})  {
/*   const switchvalue = useSelector((state) => state.switchvalue);
  console.log(switch); 
   */
  
  
  return (
    <>
    <p>Particulier</p>
      <input 
        onChange={() => setSwitch(!isswitch)}
        className="react-switch-checkbox "
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isswitch && '#86B19A' }}
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