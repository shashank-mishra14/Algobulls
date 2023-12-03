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
              <div className="loginBox"></div>
            </div>
        </div>
    </div>
  )
}

export default Login