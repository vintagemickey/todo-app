import React from 'react'
import { useLocation } from 'react-router-dom';
import AuthForm from '../components/AuthForm'
import './SignUp.css'

function SignUp(props) {
    const location  = useLocation(); 
    const state = location.state;
    
    return (
        <div className='signup'>
            <AuthForm isSignUp={state}/>
        </div>
    )
}

export default SignUp
