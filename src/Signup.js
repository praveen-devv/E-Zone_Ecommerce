import React, { useState } from 'react'
import logo from './signin.png'
import './Login.css'
import {Link , useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                console.log("auth>>>>",auth.user.email)
                if(auth){
                    auth.user.updateProfile({
                        displayName:name
                    })
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login" >
            <Link to="/logo">
                <img
                    className="login_logo"
                    src={logo} 
                />
            </Link>
            <div className="login_container">
                <h3>Create Account</h3 >
                <form>
                    <h5>Name</h5>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required/>
                    <h5>E-Mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required maxLength="8"/>
                    <p><input type="checkbox"/> I agree to the Terms of Service and privacy Policy</p>
                    <button className="login_signInButton" onClick={register}>Sign up</button>
                    <p>______________________________________________ </p>
                    <div className="login_line">
                        <h6>Already have an account? </h6>
                        <Link to="/login">
                            <h6>Sign in</h6>
                        </Link>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Signup
