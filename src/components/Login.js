import React, { useEffect } from 'react';
import '../styles/Login.css'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, loginUser } from "../redux/actions";

export const Login = props => {

const users = useSelector(state => state.users);
const dispatch = useDispatch();
const valueUserSaved = localStorage.getItem('userSaved');
const newUserSaved = JSON.parse(valueUserSaved);


useEffect(() => {
  newUserSaved&&
  newUserSaved.map(item=>dispatch(addUserAction(item)))
}, [])








  const valueLogged = localStorage.getItem('logged');
  const isLogged = JSON.parse(valueLogged);

  const [login, setLogin] = useState({})
  const [logged, setLogged] = useState(()=>isLogged)

  const handlerLoginInput = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const settingLocalStorage = () => {
    localStorage.setItem('logged', JSON.stringify(logged))
  }

  const found = (e) => {
e.preventDefault()
    const user = users.find(element => element.email === login.email && element.password === login.password)
    user ? setLogged(logged => logged = true) : setLogged(logged => logged = false)
    user && alert(`Bienvenido, ${user.name}`)
    !user && alert(`Sus datos no son correctos, intente nuevamente`)
    dispatch(loginUser())
    props.closingFunction()
  }

  useEffect(() => {
    settingLocalStorage()
  }, [logged])

  return (
    props.trigger ?
      <form className='wholePupop'>
        <div className='loginModal '>
          <div onClick={props.closingFunction} className='cerrarLoginCruz' />
          <div className='publiDisney'></div>
          <h3 className="signInTitle">SIGN IN</h3>
          <input onChange={e => handlerLoginInput(e)} name="email" type="text" placeholder='Email Address' className=" form-control" />
          <input onChange={e => handlerLoginInput(e)} name="password" type="password" placeholder='Password' className=" form-control" />
          <button type='submit' onClick={(e) => { found(e) }} className="btn btn-secondary signInButton">Sign In</button>
        </div>

      </form>
      :
      "")
}