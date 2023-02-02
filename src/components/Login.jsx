import React ,{useState}from 'react';
import axios from 'axios';

function Login(){
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const handleApi=()=>{
console.log({email,password})
axios.post('https://movie-mozzo.up.railway.app/api/auth/login',{
    email:email,
    password:password
})
.then(result=>{
console.log(result);
alert('successfully logged in')
})
.catch(error =>{
  console.log(error)
  alert("error")
})
}

return(
    <div style={{marginLeft:"40%"}}>
        <h1>Login Page</h1>
        <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br><br></br>
        <button onClick={handleApi}>Register</button>
    </div>
)}

export default Login;