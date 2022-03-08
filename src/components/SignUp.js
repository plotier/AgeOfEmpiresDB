import React, { useState, useEffect } from 'react'
import '../styles/SignUp.css'
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../redux/actions";

export const SignUp = props => {
    const [datosUsuario, setDatosUsuario] = useState({})

    const handleUserInput = e => {
        setDatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value
        })
    }
    
    const dispatch = useDispatch();
    const users = useSelector (state=>state.users);

    const addUser = (event)=>{
        event.preventDefault();
        let newUser ={
            id:users.length,
            name:datosUsuario.firstName,
            lastName:datosUsuario.lastName,
            email:datosUsuario.email,
            password:datosUsuario.password
        }
        dispatch(addUserAction(newUser))
        setDatosUsuario("");
        props.triggerOff() 
        localStorage.setItem('userSaved', JSON.stringify([...users,newUser]))
        // localStorage.setItem('userSaved', JSON.stringify([...users,newUser]))
    }

    return (
        props.trigger &&
        <div className='d-flex justify-content-center wholePupop'>
            <form className='signUpModal text-center pt-1' >
            <div onClick={props.triggerOff} className='cerrarSignUpCruz ' />

                <h3 className="signInTitle text-light">Create your account</h3>
                <input onChange={e => handleUserInput(e)} type="text" name='firstName' placeholder='First Name' className="m-2 w-75 form-control" required />
                <input onChange={e => handleUserInput(e)} type="text" name='lastName' placeholder='Last Name' className="m-2 w-75  form-control" required />
                <input onChange={e => handleUserInput(e)} type="text" name='email' placeholder='Email Address' className="m-2 w-75  form-control" required />
                <input onChange={e => handleUserInput(e)} type="password" name='password' placeholder='Password' className="m-2 w-75  form-control" required />
                <button type='submit' onClick={ (event)=> addUser(event)} className="btn btn-secondary">Sign up</button>
            </form>

        </div>
    )
}



