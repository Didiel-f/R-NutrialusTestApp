import React, { useEffect, useState } from 'react'
import { getPatients } from '../helpers/getPatients';

export const PatientCard = () => {

    const [patient, setPatient] = useState({});
    
    useEffect( () => {
        getPatients()
            .then( setPatient );
    }, []);
    

    const {email, image, name, nutritionist, phone} = patient;

    return (
        <>
            <div className="card animate__animated animate__bounce">
                <div className="banner">
                    <img  src={`${email}`} alt="imgProfile"  />
                </div>
                <h2 className="name"> {name} </h2>
                <div className="title"> Nutricionista: {nutritionist} </div>
                <div className="actions">
                    <div className="follow-info">
                        <h2><a href="/#"><span className="material-icons material-icons-round">email</span><small> {email} </small></a></h2>
                        <h2><a href="/#"><span className="material-icons material-icons-round">phone</span><small> {phone} </small></a></h2>
                    </div>
                    <div className="follow-btn">
                        <button
                            onClick={ () => {getPatients().then( setPatient );} }
                        >Actualizar
                        </button>
                    </div>
                </div>
            </div>         
        </>
    )
}