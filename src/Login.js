import React, {useState} from 'react'
import "./Login.css"
import {auth} from './firebase'
import {login} from './features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profile, setProfile] = useState('')
    const dispatch = useDispatch()

    const loginToApp = (e) =>{
        e.preventDefalut()

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        }).catch((error) =>{
            alert(error)
        })
    }

    const register = () =>{
        // if there you didn't put full name return ...
        if(!name){
            return alert("Please enter a full name")
        }

        // if is used to create user with email and password
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            // once we get the user it allow user we can update profile
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profile,
            })
            .then(() => {
                // push the user into the store use dispatch login action - redux 
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profile,
                }))
            })
        }).catch((error) => alert(error))
    }

  return (
    <div className='login'>
        <img src="https://brand.linkedin.com/content/dam/brand/site/img/logo/logo-hero.png" alt=""/>
        <form >
            <input
                type="text" 
                placeholder='Full name (required if registering)' value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input 
                type="text" 
                placeholder='Profile pic URL (optional)'
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
            />

            <input 
                type="email" 
                placeholder='Email'
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />

            <input 
                type="password" 
                placeholder='Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />

            <button 
                type='submit' 
                onClick={loginToApp}> Sign In
            </button>
        </form>
        <p>
            Not a member?
            <span className='login__register'
                onClick={register}> Register Now</span>
        </p>
    </div>
  )
}

export default Login