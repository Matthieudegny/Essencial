// == Imports
import React from "react";
import { useState } from 'react';
import '../styles/homeInscription.scss';
import AppInscriptionForm from '../components/AppInscriptionForm';
import AppInscriptionFormVillage from '../components/AppInscriptionFormVillage/index';
import Switch from "../components/SwitchButton/switch";


const HomeInscription = () => {

    const [isswitch, setSwitch] = useState(true);

    return (
        <div className="home-inscription-container"  >

            <div className="switch-container">

                <Switch
                    isswitch={isswitch}
                    setSwitch={setSwitch}
                />

            </div>

            <div className="form-container">

                {isswitch ? (<AppInscriptionForm />)

                    :
                    (<AppInscriptionFormVillage />)
                }

            </div>


        </div>


    );
};

export default HomeInscription;

