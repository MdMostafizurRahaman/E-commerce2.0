import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginSignUp'>
      <div className="loginSignUp-container">
        <h1>Sign Up</h1>
        <div className="loginSignUP-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password'/>
        </div>

        <button>Continue</button>
        <p className='loginSignUP-login'>
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginSignUP-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms and policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
