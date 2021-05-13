import React, { useState } from 'react'
import './Login.css'
import logo from './signin.png'
import {Link , useHistory} from 'react-router-dom'
import {auth} from './firebase'
import firebase from 'firebase'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const googleAuth =() =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        auth
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                history.push('/')
                // ...
            }).catch((error) => {
                console.log(error)
            });
    }

    

    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className="login_logo"
                    src={logo}
                />
            </Link>
           
            <div className="login_container">
                <h3>Sign In</h3>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} required onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required maxLength="8"/>
                    <p>By continuing,you agree to Sysco System's Conditions of Use and Privacy Notice.</p>
                    <button className="login_signInButton" type="submit" onClick={signIn}>Sign In</button>
                    <h5 className="signup_line">New to Sysco Systems?</h5>
                    <Link to="/signup">
                        <button className="login_registerButton">Create your E-zone account</button>
                    </Link>
                    <div className="google">
                        <p s>or sign up with</p>
                        <button onClick={googleAuth} className="google-button">
                            <img width="40" height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg"/>
                        </button>
                    </div>
                    
                    

                </form>
            </div>
            
        </div>
    )
}

export default Login
