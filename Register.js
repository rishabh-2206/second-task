import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './forms.css'
import {auth} from './firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
const navigate=useNavigate()
  const validatePassword=()=>{
   
    let isValid=true;
    if(password!==''&&confirmPassword!=='')
    {
      if(password!==confirmPassword)
      {
       isValid=false;
       setError("Password doesn't match")
      }
      
    }
    return isValid;
  }

  const register=e=>{
    e.preventDefault();
    setError('');
    if(validatePassword())
    {
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
          console.log(res.user);
          navigate('/')
        })
      .catch(err => setError(err.message))
    }
    setEmail('')
    setConfirmPassword('')
    setPassword('')
  }

  return (
    <div className='center'>
      <div className='auth'>
        <h1>Register</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={register} name='registration_form'>
          <input 
            type='email' 
            value={email}
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password} 
            required
            placeholder='Enter your password'
            onChange={e => setPassword(e.target.value)}/>

            <input 
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}/>

          <button type='submit'>Register</button>
        </form>
        <span>
          Already have an account?  
          <Link to='/login'>login</Link>
        </span>
        <hr></hr>
        <h3>Register using:</h3>
        <div className='register-auth-modes-box'>
        <button className='register-mode google'>Google</button>
        <button className='register-mode fb'>Facebook</button>
        <button className='register-mode email'>email</button>

        </div>
      </div>
    </div>
  )
}

export default Register