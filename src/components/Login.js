// import React,{ useState,useEffect}  from 'react'
// import {useHistory} from 'react'

// const Login = () => {

//     const[username, setUsername]=useState('')
    
//     const[password, setPassword]=useState('')
//     const history=useHistory();
//     useEffect(()=>{
//         if(localStorage.getItem ('user-info')){
//             history.push('/add');
//         }
//     },[]);
//     function Login(){
//         console.warn(username,password)
//     }
//   return (
//     <div>
//       <div>
//         <title>SIGN IN</title>
//         <form>
//           <input placeholder="Username"onChange={(e)=>setUsername(e.target.value)}/>
//           <input placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
//           Not a User? Create a new account!
//           <button onClick={Login}>LOGIN</button>
//         </form>
//       </div>
// </div>
//   )
// }

// export default Login;