import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Userbox from './Userbox';
import { useAuthValue } from "./AuthContext"
import { signOut } from 'firebase/auth';

import {auth} from './firebase'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';



  function Home() {
    const [data,setData]=useState([])
    const navigate=useNavigate()
   
        const {currentUser} = useAuthValue()
        console.log(currentUser)
      
        async function handleLogout()
        {
           
              await signOut(auth);
              navigate('/login')
        }
      
    useEffect( () => {  
        onAuthStateChanged(auth,(user)=>{
          if(!user)
          {
            navigate('/login')

          }
          else{
            fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res=>res.json())
      .then(data=>{
        console.log("got data",data);
        setData(data);
      })
      .catch(err=>{
      console.log("error:",err);
      })
          }
        })
      
   

       
    },[]);

console.log("got data",data);
  return (
    <div className="home-container">
        {/* <h3 className='current-user'>{currentUser}</h3> */}
        <button onClick={handleLogout}>Logout</button>
        
          <Userbox data={data} isExpand={false} />
          
         
    </div>
  );
}

export default Home;