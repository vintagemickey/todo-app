import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './AuthForm.css'

function AuthForm(props) {
    const notSignedUp = false;

    return (
        <div className='auth-form'>
            <Link to="/" className="auth-logo">
                <i className="fa-sharp fa-solid fa-bars"/> <h1 className="header-name">Todo Daily</h1>
            </Link> 
            <p>{props.isSignUp ? 'Signin' : 'Signup'}</p>
            <form>
                <input type="email" placeHolder="Input your e-mail"></input>
                <input type="password" placeHolder="Input your password"></input>
                <input type="submit" value={props.isSignUp ? 'Signin' : 'Signup'}></input>
            </form>
            <div className='auth-new-account'>
                <div>
                    <p>Not have account?</p>
                    <Link to="/signup" state={notSignedUp}>Signup</Link>
                </div>
                <div>
                    <p>Or click to see demo</p>
                    <Link to="/todo">Demo</Link>
                </div>
            </div>
        </div>
    )
}

export default AuthForm
