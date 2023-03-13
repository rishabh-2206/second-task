import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes, } from 'react-router-dom'
import {useState} from 'react'
import {AuthProvider} from './AuthContext'
import { useEffect} from 'react'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'

// import Profile from './Profile'
import Register from './Register'
import VerifyEmail from './VerifyEmail';
import Login from './Login'
import Home from './Home'
function App() {
  const [currentUser,setCurrentUser]=useState(null)

  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
    
      setCurrentUser(user)
    })
   
  }, []);

  return (
    <Router>
      <AuthProvider value={{currentUser}} >
  <Routes>
        < Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register/>} />
    
    </Routes>
      </AuthProvider>
  </Router>
  );
}

export default App;
