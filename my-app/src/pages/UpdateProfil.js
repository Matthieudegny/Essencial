// == Imports
import React, {  useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {  actionChangeUpdateProfileUser } from '../actions/updateProfile';



const UpdateProfil = () => {
    const dispatch = useDispatch();

    // const email = useSelector((state) => state.user.email);
    // const isLogged = useSelector((state) => state.user.isLogged);
    // const villageArray = useSelector((state) => state.allUsers.allVillages);
    // const userArray = useSelector((state) => state.allUsers.allUsers);


    //je récupère les infos de l'utilisateur ds le reducer updtaeProfile + son type
    const userData = useSelector((state) => state.updateReducer);
    console.log(userData)
    //j'enregistre d'un coté les infos de l'autre type
    const typeUser = userData.type;
    const userDatas = userData.dataProfile
   
    // const [nameInput, setNameInput] = useState('')
    //console.log(typeUser,userDatas)

    const handleSubmit = () => {
        console.log("wait")
    }

    const handleChangeUser = (evt) => {
        dispatch(
            actionChangeUpdateProfileUser(evt.target.name, evt.target.value)
        )
        
    }

    const handleChange = (evt) => {
        // dispatch(
        //     actionChangeUpdateProfileUser(evt.target.name, evt.target.value)
        // )
        console.log("ok")
        
    }



    return (
        <div className="home" >

             {userData ? (

                <>
                
                {typeUser==='user' ? (
                    
                    <>

                        <div className="form-container">

                        <div className="login-form-particular">

                            <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
                                <input
                                name="last_name"
                                placeholder="Nom"
                                onChange={handleChangeUser}
                                value={userDatas.last_name}
                                />
                                <input
                                name="first_name"
                                placeholder="Prenom"
                                onChange={handleChangeUser}
                                value={userDatas.first_name}
                                />
                                <input
                                name="email"
                                placeholder="Email"
                                onChange={handleChangeUser}
                                value={userDatas.email}
                                />
                                <input
                                name="pseudo"
                                placeholder="Pseudo"
                                onChange={handleChangeUser}
                                value={userDatas.pseudo}
                                />
                                <input
                                name="password"
                                type="password"
                                placeholder="Nouveau mot de passe"
                                onChange={handleChangeUser}
                                value={userDatas.password}
                                />
                                <input
                                name="address"
                                placeholder="Adresse"
                                onChange={handleChangeUser}
                                value={userDatas.address}
                                />
                                <input
                                name="zip_code"
                                placeholder="Zip_code"
                                onChange={handleChangeUser}
                                value={userDatas.zip_code}
                                />
                                <input
                                name="city"
                                placeholder="Ville"
                                onChange={handleChangeUser}
                                value={userDatas.city}
                                />
                                <input
                                name="region"
                                placeholder="Region"
                                onChange={handleChangeUser}
                                value={userDatas.region}
                                />
                                <input
                                name="path"
                                placeholder="Url_image"
                                onChange={handleChangeUser}
                                value={userDatas.path}
                                />
                                <button
                                type="submit"
                                className="login-form-button"
                                >
                                Modifier
                                </button>
                            </form>

                        </div>

                        </div>
                
                    </>

                    ) : (
                        
                    <div className="form-container">

                        <div className="login-form-particular">

                            <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
                                <input
                                name="last_name"
                                placeholder="Nom"
                                onChange={handleChange}
                                value={userDatas.last_name}
                                />
                                <input
                                name="first_name"
                                placeholder="Prenom"
                                onChange={handleChange}
                                value={userDatas.first_name}
                                />
                                <input
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={userDatas.email}
                                />
                                <input
                                name="pseudo"
                                placeholder="Pseudo"
                                onChange={handleChange}
                                value={userDatas.pseudo}
                                />
                                <input
                                name="password"
                                type="password"
                                placeholder="Mot de passe"
                                onChange={handleChange}
                                value={userDatas.password}
                                />
                                <input
                                name="address"
                                placeholder="Adresse"
                                onChange={handleChange}
                                value={userDatas.adress}
                                />
                                <input
                                name="zip_code"
                                placeholder="Zip_code"
                                onChange={handleChange}
                                value={userDatas.zip_code}
                                />
                                <input
                                name="city"
                                placeholder="Ville"
                                onChange={handleChange}
                                value={userDatas.city}
                                />
                                <input
                                name="region"
                                placeholder="Region"
                                onChange={handleChange}
                                value={userDatas.region}
                                />
                                <input
                                name="path"
                                placeholder="Url_image"
                                onChange={handleChange}
                                value={userDatas.path}
                                />
                                <button
                                type="submit"
                                className="login-form-button"
                                >
                                Modifier
                                </button>
                            </form>

                        </div>

                    </div>
                )}

                </>
                        
            ) : (

                <>
                Veuillez vous connecter avant d'accéder à ce service
                </>

            )} 
                  

        </div>
    );
};

export default UpdateProfil;