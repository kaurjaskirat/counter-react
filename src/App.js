
import React from 'react';
import './App.css';
// import { useState } from 'react';
import Login from './components/Login'
import Register from './components/Register';



const App = () => {
  // const[text,settext]=useState(0)
  // const inval=()=>{
  //   settext(text+1)
  // }
  // const decval=()=>{
  //   settext(text-1)
  // }
  return (
    // <div className='text-center py-8'>
      // <Login/>
      
      /* <style>{'body{background-color:pink}'}</style>
      <h1 style={{margin:"2%",textDecoration:"underline"}}>COUNTER</h1>
      <button onClick={inval}>INCREAMENT</button>
      <h1 style={{margin:"4%",fontSize:"450%"}}>{text}</h1>
      <button onClick={decval}>DECREAMENT</button>

    </div> */
    
    <Login/>,
    <Register/>
  );
}

export default App;
