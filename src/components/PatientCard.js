import React, { useEffect, useState } from 'react'
import { getPatients } from '../helpers/getPatients';

export const PatientCard = () => {

    const [patient, setPatient] = useState({});
    
    // El useEffect para no hacer un infinity loop
    useEffect( () => {
        getPatients()
            .then( setPatient );
    }, []);
    

    const {email, image, name, nutritionist, phone} = patient;

    return (
        <>
            <div className="card animate__animated animate__bounce">
                <div className="banner">
                    {/* estoy usando el email en el src para actualizar la url y React renderice */}
                    <img  src={`${image}?x=${email}`} alt="imgProfile"  /> 
                </div>
                <h2 className="name animate__animated animate__fadeIn"> {name} </h2>
                <div className="title"> Nutricionista: {nutritionist} </div>
                <div className="actions">
                    <div className="follow-info">
                        <h2><a href=""><span className="material-icons material-icons-round">email</span><small className="animate__animated animate__fadeIn"> {email} </small></a></h2>
                        <h2><a href=""><span className="material-icons material-icons-round">phone</span><small className="animate__animated animate__fadeIn"> {phone} </small></a></h2>
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