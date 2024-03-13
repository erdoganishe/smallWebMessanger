import React from 'react';
import './LoginSignup.css'

import password_icon from '../Assets/password.png'
import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import { useState } from 'react'


const LoginSignup = () => {

  const [action, setAction] = useState("Login")


  return (
    <div className="container">
        <div className="header">
            
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email' />
            </div>}

            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Username'/>
            </div>
           

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="submit-container">
            <div className={action==="Login"?"submit green":"submit"} onClick={()=>{
                setAction("Sign Up")
            }}>Sign Up</div>
            <div className={action==="Sign Up"?"submit green":"submit"} onClick={()=>{
                setAction("Login")
                }}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup