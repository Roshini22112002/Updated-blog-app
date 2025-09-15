import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [form,setForm]=useState({
    userName:'',
    email:'',
    password:'',
    phone:''
  })
  const navigate=useNavigate()
  function capValue(e){
    e.preventDefault();
    axios.post('/api/user/reg',form)
    .then((res)=>{
      alert(res.data.message)
      if(res.data.usertoken){
        localStorage.setItem("token",res.data.usertoken)
        navigate('/')
      }
    })
    .catch((err)=>{
      console.log(err)
      alert("Invalid Credential")
      navigate('/')
    })
  }
  return (
    <div>
      <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      >
        <TextField
    id="userName"
    name="userName"
    label="UserName"
    variant="standard"
    type="userName"
    value={form.userName}
    onChange={(e)=>setForm({...form,userName:e.target.value})}
  /><br></br>
  <TextField
    id="email"
    name="email"
    label="Email"
    variant="standard"
    type="email"
    value={form.email}
    onChange={(e)=>setForm({...form,email:e.target.value})}
  /><br></br>
  <TextField
    id="password"
    name="password"
    label="Password"
    variant="standard"
    type="password"
    value={form.password}
    onChange={(e)=>setForm({...form,password:e.target.value})}
  /><br></br>
  <TextField
    id="phone"
    name="phone"
    label="Phone"
    variant="standard"
    type="phone"
    value={form.phone}
    onChange={(e)=>setForm({...form,phone:e.target.value})}
  /><br></br>
         
          <Button variant="contained" onClick={capValue}>Login</Button>
          </Box>
    </div>
  )
}

export default Login