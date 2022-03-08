import React, { useEffect } from 'react';
import '../styles/Login.css'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, loginUser } from "../redux/actions";
import { SimplePupop } from './SimplePupop';

export const Login = props => {

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const valueUserSaved = localStorage.getItem('userSaved');
  const newUserSaved = JSON.parse(valueUserSaved);

  useEffect(() => {
    newUserSaved &&
      newUserSaved.map(item => dispatch(addUserAction(item)))
  }, [])

  const valueLogged = localStorage.getItem('logged');
  const isLogged = JSON.parse(valueLogged);

  const [login, setLogin] = useState({})
  const [logged, setLogged] = useState(() => isLogged)

  const handlerLoginInput = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const settingLocalStorage = (tag, contentToSave) => {
    localStorage.setItem(tag, JSON.stringify(contentToSave))
  }
 
  const found = (e) => {
    e.preventDefault()
    const user = users.find(element => element.email === login.email && element.password === login.password)
    user ? setLogged(logged => logged = true) : setLogged(logged => logged = false)
  
    !user && alert(`Sus datos no son correctos, intente nuevamente`)
    dispatch(loginUser())
    user &&props.closingFunction()
    user &&settingLocalStorage('loggedUser', user)
  }

  useEffect(() => {
    settingLocalStorage('logged', logged)
  }, [logged])

  return (
    
    props.trigger ?
      <form className='wholePupop'>
        <div className='loginModal pt-1'>
          <div onClick={props.closingFunction}  className='cerrarLoginCruz' />
          <h3 className="signInTitle  text-light">SIGN IN</h3>
          <input onChange={e => handlerLoginInput(e)} name="email" type="text" placeholder='Email Address' className=" form-control" />
          <input onChange={e => handlerLoginInput(e)} name="password" type="password" placeholder='Password' className=" form-control" />
          <button type='submit' onClick={(e) => { found(e) }} className="btn btn-secondary signInButton">Sign In</button>
        </div>

      </form>
      :
      "")
}