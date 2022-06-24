// == Imports
import React, {  useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {  actionChangeUpdateProfileUser, actionChangeUpdateProfileVillage, actionRequestChangeProfileUser, actionRequestChangeProfileVillage } from '../actions/updateProfile';
import * as dayjs from 'dayjs'


const UpdateProfil = () => {
    const dispatch = useDispatch();

    // const email = useSelector((state) => state.user.email);
    // const isLogged = useSelector((state) => state.user.isLogged);
    // const villageArray = useSelector((state) => state.allUsers.allVillages);
    // const userArray = useSelector((state) => state.allUsers.allUsers);


    //je récupère les infos de l'utilisateur ds le reducer updtaeProfile + son type
    const dataUser = useSelector((state) => state.updateReducer.user);
    const dataVillage = useSelector((state) => state.updateReducer.ecoVillage);
    const typeUser = useSelector((state) => state.updateReducer.type);
    

    // console.log(dataUser)
    // console.log(dataVillage)
    // console.log(typeUser)

    //j'enregistre d'un coté les infos de l'autre type
    // const typeUser = userData.type;
    // const userDatas = userData.dataProfile
   
    // const [nameInput, setNameInput] = useState('')
    //console.log(typeUser,userDatas)

    const handleSubmitUser = (evt) => {
        evt.preventDefault()
        console.log("je lance ma requête requestUpdateProfileUser")
        dispatch(
            actionRequestChangeProfileUser(dataUser)
        )
    }

    const handleSubmitVillage = (evt) => {
        evt.preventDefault()
        console.log("je lance ma requête requestUpdateProfileVillage")
        dispatch(
            actionRequestChangeProfileVillage(dataVillage)
        )

    }

    const handleChangeUser = (evt) => {
        
        dispatch(
            actionChangeUpdateProfileUser(evt.target.name, evt.target.value)
        )
    }

    const handleChangeVillage = (evt) => {
        console.log(evt.target.name, evt.target.value)
        dispatch(
            actionChangeUpdateProfileVillage(evt.target.name, evt.target.value)
        )        
    }

    console.log(typeUser)

    return (
        <div className="home" >

             {dataUser||dataVillage ? (

                <>
                
                {typeUser==='user' ? (
                    
                    <>

                        <div className="form-container">

                        <div className="login-form-particular">

                            <form autoComplete="off" className="login-form-element" onSubmit={handleSubmitUser}>
                                <input
                                name="last_name"
                                placeholder="Nom"
                                onChange={handleChangeUser}
                                value={dataUser.last_name}
                                />
                                <input
                                name="first_name"
                                placeholder="Prenom"
                                onChange={handleChangeUser}
                                value={dataUser.first_name}
                                />
                                <input
                                name="email"
                                placeholder="Email"
                                onChange={handleChangeUser}
                                value={dataUser.email}
                                />
                                <input
                                name="pseudo"
                                placeholder="Pseudo"
                                onChange={handleChangeUser}
                                value={dataUser.pseudo}
                                />
                                <input
                                name="password"
                                type="password"
                                placeholder="Nouveau mot de passe"
                                onChange={handleChangeUser}
                                value={dataUser.password}
                                />
                                <input
                                name="address"
                                placeholder="Adresse"
                                onChange={handleChangeUser}
                                value={dataUser.address}
                                />
                                <input
                                name="zip_code"
                                placeholder="Zip_code"
                                onChange={handleChangeUser}
                                value={dataUser.zip_code}
                                />
                                <input
                                name="city"
                                placeholder="Ville"
                                onChange={handleChangeUser}
                                value={dataUser.city}
                                />
                                <input
                                name="region"
                                placeholder="Region"
                                onChange={handleChangeUser}
                                value={dataUser.region}
                                />
                                <input
                                name="path"
                                placeholder="Url_image"
                                onChange={handleChangeUser}
                                value={dataUser.path}
                                />
                                <input
                                name="description"
                                placeholder="description"
                                onChange={handleChangeUser}
                                value={dataUser.description}
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

                            <form autoComplete="off" className="login-form-element" onSubmit={handleSubmitVillage}>
                                <input
                                    name="name"
                                    placeholder="Nom de l'Écovillage"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.name}
                                />
                                <input
                                    name="path"
                                    placeholder="Url_image"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.path}
                                />
                                <input
                                    name="description"
                                    placeholder="Description de l'Écovillage"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.description}
                                />
                                <input
                                    name="website"
                                    placeholder="adresse internet du site"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.website}
                                />
                                <input
                                    name="address"
                                    placeholder="Adresse"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.address}
                                />
                                <input
                                    name="zip_code"
                                    placeholder="Zip_code"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.zip_code}
                                />
                                <input
                                    name="city"
                                    placeholder="Ville"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.city}
                                />
                                <input
                                    name="region"
                                    placeholder="Region"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.region}
                                />

                                <input
                                    name="last_name_manager"
                                    placeholder="Nom du manager"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.last_name_manager}
                                />
                                <input
                                    name="first_name_manager"
                                    placeholder="Prenom du manager"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.first_name_manager}
                                />
                                <input
                                    type="date"
                                    name="date_of_birth_manager"
                                    placeholder="date de naissance du manager"
                                    onChange={handleChangeVillage}
                                    value={dayjs(dataVillage.date_of_birth_manager).format("YYYY-MM-DD")}
                                />
                                <input
                                    name="phone_number"
                                    placeholder="numéro de téléphone"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.phone_number}
                                />
                                <input
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.email}
                                />
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Mot de passe"
                                    onChange={handleChangeVillage}
                                    value={dataVillage.password}
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