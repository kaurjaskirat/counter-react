import React,{useState} from 'react';
import axios from 'axios';



function Register(){
const[name,setName]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[phone,setPhone]=useState('');

const handleApi=()=>{
console.log({name,email,password,phone});
axios.post('https://movie-mozzo.up.railway.app/api/auth/register',{
name:name,
email:email,
password:password,
phone:phone
})
.then(result=>{
console.log(result)
alert('successfully registered')
})
.catch(error=>{
    console.log(error)
})

}
    
    return(
        <div style={{marginLeft:"40%"}}>
        <h1>Register Page</h1>
        <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
        <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
        <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br><br></br>
        <input type='number' placeholder='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}></input><br></br><br></br>
        <button onClick={handleApi}>Register</button>
    </div>
    )
}
export default Register;