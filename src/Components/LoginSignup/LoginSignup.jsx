import React from 'react'
import './LoginSignup.css'
import email from '../../Assets/email.svg'
import password from '../../Assets/password.svg'
import person from '../../Assets/person.svg'

export const LoginSignup = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>  
        <div className='inputs'>
            <div className="input">
                <img src="" alt="" />
                <input type="text" />
            </div>
            <div className="input">
                <img src="" alt="" />
                <input type="email" />
            </div>
            <div className="input">
                <img src="" alt="" />
                <input type="password" />
            </div>
        </div>
    </div>
  )
}

export default LoginSignup
