import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
            <h3 className="loginLogo">Algobulls</h3>
            <span className="loginDesc">Login to explore</span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">Create a new Account!</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login