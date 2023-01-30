import React from 'react'
import "./Login.css"

function Login() {

    const signin = () =>{
        e.preventDefalut()
    }
    const register = () =>{
        e.preventDefalut()
    }
  return (
    <div className='login'>
        <img src="https://brand.linkedin.com/content/dam/brand/site/img/logo/logo-hero.png" alt=""/>
        <form >
            <input type="text" placeholder='Full name (required if registering)'/>
            <input type="text" placeholder='Profile pic URL (optional)'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password' />
            <button type='submit' onClick={signin}> Sign In</button>
        </form>
        <p>Not a member ? 
            <span className='login__register'
                onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login