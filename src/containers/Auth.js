import React from 'react'
import AuthForm from '../components/AuthForm'
import {useDispatch} from 'react-redux'
import {login} from "../actions/user";


const Auth = () => {
    const dispatch=useDispatch()

    const loginHendler = (e) =>{ 
            e.preventDefault()
            let elem = e.target.elements
            let email = elem.InputEmail1.value;
            let password =  elem.InputPassword1.value;
            dispatch(login(email,password))
    }
    return (
        <div className="home-par">
            <form onSubmit={loginHendler}>
               <AuthForm/>
            </form>
        </div>
    )
}

export default Auth