import React ,{useState} from 'react';
import {CognitoUserPool} from 'amazon-cognito-identity-js';
import UserPool from '../UserPool'

const SignUp=() =>{

  const [email,setEmail]=useState(''); //recieves email input
  const [password,setPassword]=useState('');//recieves password input



  const onSubmit=event=>{
    event.preventDefault()
    UserPool.signUp(email,password,[],null,(err,data)=>{ //email and password submitted via userpool to aws cognito
      if(err){
        console.error(err) //if incorrect reason is printed to console screen
      }
      console.log(data) //if correct response data is logged (e.g user details)
    })
  };


  return (
    <div >
    <form onSubmit={onSubmit}>
    <input value={email} onChange={event=>setEmail(event.target.value)}/>
    <input value={password} onChange={event=>setPassword(event.target.value)}/>
    <button type='submit'>Sign Up</button>

    </form>
    </div>
  );
}

export default SignUp;
