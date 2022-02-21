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
    // const [usuariosGuardados, setUsuariosGuardados] = useState([])
    // const savingUser = (event) => {
    //     event.preventDefault();
    //     setUsuariosGuardados([...usuariosGuardados,
    //         datosUsuario
    //     ])
    //     props.triggerOff()
    // }
    // useEffect(() => {
    //     if (usuariosGuardados.length > 0) {
    //         localStorage.setItem('userSaved', JSON.stringify(usuariosGuardados))
    //     }
    // }, [usuariosGuardados])


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
    }

    return (
        props.trigger &&
        <div className='d-flex justify-content-center'>
            <form className='popupSignUp text-center' >
                <div onClick={props.triggerOff}>KLOSE</div>
                <input onChange={e => handleUserInput(e)} type="text" name='firstName' placeholder='First Name' className=" form-control" required />
                <input onChange={e => handleUserInput(e)} type="text" name='lastName' placeholder='Last Name' className=" form-control" required />
                <input onChange={e => handleUserInput(e)} type="text" name='email' placeholder='Email Address' className=" form-control" required />
                <input onChange={e => handleUserInput(e)} type="password" name='password' placeholder='Password' className=" form-control" required />
                <button type='submit' onClick={ (event)=> addUser(event)} className="btn btn-secondary">Sign up</button>
            </form>

        </div>
    )
}

