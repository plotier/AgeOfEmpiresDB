import React from 'react'
import logo from '../img/logoAOE2.png'
import '../styles/Navbar.css'
import { useState } from 'react'
import { SignUp } from './SignUp'
import { Login } from './Login'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {  loginUser } from "../redux/actions";

export const Navbar = () => {

    const [openedLogin, setOpenedLogin] = useState(false)
    const [openedSignup, setOpenedSignup] = useState(false)

    const openLoginModal = () => {
        setOpenedLogin(openedLogin => !openedLogin)
    }
    const openSignupModal = () => {
        setOpenedSignup(openedSignup => !openedSignup)
    }
    const valueUserLogged = localStorage.getItem('loggedUser');
    const userLogged = JSON.parse(valueUserLogged);

    const logOutHandler = () =>{
        dispatch(loginUser())
    }

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const logged = useSelector(state => state.logged);
    return (
        <div>
            <Login trigger={openedLogin} closingFunction={openLoginModal} />
            <SignUp trigger={openedSignup} triggerOff={openSignupModal} />
            <nav className="navbar navbar-light bg-transparent row">
              <div className="col d-flex justify-content-center dbBox2">{logged&&userLogged.name}</div>
                <div className="col-6 d-flex">
                    <div className='navbarLogo'>
                        <Link to="/"><img src={logo} alt="" /></Link>
                        <h5 className='text-center dbBox'>DATABASE</h5>
                    </div>
                </div>
{    !logged&&             <div className="col d-flex justify-content-end">
                    <span className='me-5 buttonSignLogNavbar' onClick={openLoginModal}>LOGIN</span>
                    <span className='me-5 buttonSignLogNavbar' onClick={openSignupModal}>SIGNUP</span>
                </div>}
{  logged&&             <div className="col d-flex justify-content-end">
                    <span className='me-5 buttonSignLogNavbar' onClick={logOutHandler}>LOGOUT</span>
                    <span className='me-5 buttonSignLogNavbar' ></span>
                </div>}
            </nav>
        </div>
    )
}
