import React from "react";
import {useNavigate} from 'react-router-dom'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom'
import { useState } from "react";





import './forms.css'
const auth = getAuth();


function Login(){
  const navigate=useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const provider = new GoogleAuthProvider();
  const  fbprovider = new FacebookAuthProvider();

const loginFb=e=>{
  e.preventDefault()
  signInWithPopup(auth, fbprovider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    console.log("user",user);
  })
  .catch((error) => {
  console.log("error ",error.message);
  setError(error.message)

    // ...
  });
}
  const loginGoogle =(e)=>{
    e.preventDefault()
    signInWithPopup(auth, provider)
  .then((result) => {
   
   
    const user = result.user;
    console.log("user logged in",user);
    navigate('/')
   
  }).catch((error) => {
   console.log(error.message);
    setError(error.message)
  });
  }
  
  const login=e=>{
    e.preventDefault();
    setError('')
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      //signed in 
      console.log("user logged in");
      const user= userCredential.user  
      console.log("suer",user);
      //localstorage save
      navigate('/')
   
      
      
    })
    .catch(err=>{
      console.log(err.message);
    })
    setEmail('')
    setPassword('')
    
  }
  return(
    <div className='center'>
      <div className='auth'>
        <h1>Log in</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={login} name='login_form'>
          <input 
            type='email' 
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password}
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

          <button type='submit'>Login</button>
        </form>
        <p>
          Don't have and account? 
          <Link to='/register'>Create one here</Link>
        </p>
        <hr></hr>
        <h3>Login using:</h3>
        <div className='register-auth-modes-box'>
        <button className='register-mode google' onClick={loginGoogle}>Google</button>
        <button className='register-mode fb' onClick={loginFb}>Facebook</button>
      

        </div>
      </div>

    </div>
  )
}

export default Login