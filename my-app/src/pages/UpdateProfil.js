// == Imports
import React, {  useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Field from '../components/InscriptionForm/Field';
import {  actionChangeFormField } from '../actions/inscription';
import InscriptionForm from "../components/InscriptionForm";


const UpdateProfil = () => {
    const dispatch = useDispatch();

    const email = useSelector((state) => state.user.email);
    const isLogged = useSelector((state) => state.user.isLogged);
    const villageArray = useSelector((state) => state.allUsers.allVillages);
    const userArray = useSelector((state) => state.allUsers.allUsers);
  

    //je cérifies si cest un utilisateur classique ou eco village
    //je fais une comparaison avec la BDD ecoVillage car moins grande
    // const villageToUpdate = villageArray.find((testedVillage) => {
    //           return testedVillage.email === email
    // })

    //si villageToUpdate est faux je lance une recherche pour obtenir l'objet entier du user avec toutes ces infos
    //je prends donc l'email et je compare avec la BDD user pour trouver le bon.
    // const userToUpdate = userArray.find((testeduser) => {
    //             return testeduser.email === email
    // })
    //console.log(userToUpdate)

    // const handleSubmit = (evt) => {
    //     evt.preventDefault()
    //     console.log("submit")
    // }

    // const handleChange = (evt) => {
    //     //console.log(evt.target.name)
    //     dispatch(
    //          //actionChangeFormField(evt.target.value, name),
    //     );
    // };  

    return (
        <div className="home" >

            {/* {isLogged ? (

                <>
                
                {!userToUpdate ? (
                    
                    <>

                        <div className="form-container">

                        <div className="login-form-particular">

                            <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
                                <Field
                                name="last_name"
                                placeholder="Nom"
                                onChange={handleChange}
                                value={userToUpdate.last_name}
                                />
                                <Field
                                name="first_name"
                                placeholder="Prenom"
                                onChange={handleChange}
                                value={userToUpdate.first_name}
                                />
                                <Field
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={userToUpdate.email}
                                />
                                <Field
                                name="pseudo"
                                placeholder="Pseudo"
                                onChange={handleChange}
                                value={userToUpdate.pseudo}
                                />
                                <Field
                                name="password"
                                type="password"
                                placeholder="Mot de passe"
                                onChange={handleChange}
                                value={userToUpdate.password}
                                />
                                <Field
                                name="address"
                                placeholder="Adresse"
                                onChange={handleChange}
                                value={userToUpdate.adress}
                                />
                                <Field
                                name="zip_code"
                                placeholder="Zip_code"
                                onChange={handleChange}
                                value={userToUpdate.zip_code}
                                />
                                <Field
                                name="city"
                                placeholder="Ville"
                                onChange={handleChange}
                                value={userToUpdate.city}
                                />
                                <Field
                                name="region"
                                placeholder="Region"
                                onChange={handleChange}
                                value={userToUpdate.region}
                                />
                                <Field
                                name="path"
                                placeholder="Url_image"
                                onChange={handleChange}
                                value={userToUpdate.path}
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
                                <Field
                                name="last_name"
                                placeholder="Nom"
                                onChange={handleChange}
                                value={userToUpdate.last_name}
                                />
                                <Field
                                name="first_name"
                                placeholder="Prenom"
                                onChange={handleChange}
                                value={userToUpdate.first_name}
                                />
                                <Field
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={userToUpdate.email}
                                />
                                <Field
                                name="pseudo"
                                placeholder="Pseudo"
                                onChange={handleChange}
                                value={userToUpdate.pseudo}
                                />
                                <Field
                                name="password"
                                type="password"
                                placeholder="Mot de passe"
                                onChange={handleChange}
                                value={userToUpdate.password}
                                />
                                <Field
                                name="address"
                                placeholder="Adresse"
                                onChange={handleChange}
                                value={userToUpdate.adress}
                                />
                                <Field
                                name="zip_code"
                                placeholder="Zip_code"
                                onChange={handleChange}
                                value={userToUpdate.zip_code}
                                />
                                <Field
                                name="city"
                                placeholder="Ville"
                                onChange={handleChange}
                                value={userToUpdate.city}
                                />
                                <Field
                                name="region"
                                placeholder="Region"
                                onChange={handleChange}
                                value={userToUpdate.region}
                                />
                                <Field
                                name="path"
                                placeholder="Url_image"
                                onChange={handleChange}
                                value={userToUpdate.path}
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

            )} */}
                  

        </div>
    );
};

export default UpdateProfil;

