import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/AuthContext';

function Login() {
    const [username,setusername]=useState("")
    const [pass,setpass]=useState("")
    const navigate=useNavigate();
    const {dispatch}=useContext(AuthContext)

    const handleSubmit=async () => {
        // console.log(username,pass)
        const response=await axios.post('http://localhost:8000/login',{username:username,pass:pass})
        dispatch({
            type:"LOGIN",
            payload:response.data.token
        })
        localStorage.setItem('token',response.data.token)
        navigate('/dashboard')
    }

  return (
    <div className='flex flex-col gap-3 place-items-center justify-center w-full h-screen'>
        <h1 className='text-3xl'>Admin Login</h1>
        <div>
            <label htmlFor='username'>Username:</label>
            <input id='username' type='text' placeholder='Username' className='border' value={username} onChange={(e)=>setusername(e.target.value)}/>
        </div>
        <div>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' placeholder='Password' className='border' value={pass} onChange={(e)=>setpass(e.target.value)}/>
        </div>
        <button className='bg-cyan-500  p-1 rounded text-white' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login