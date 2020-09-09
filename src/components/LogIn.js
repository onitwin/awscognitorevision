import React ,{useState,useContext} from 'react';
import {CognitoUser,AuthenticationDetails} from 'amazon-cognito-identity-js'; //destructured required classes
import {AccountContext} from './Accounts'

const LogIn=() =>{

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const {authenticate}=useContext(AccountContext);



  const onSubmit=event=>{
    event.preventDefault();

    authenticate(email,password) //authenticate method brought in from Accounts via destructured AccountContext
    .then(data=>{
      console.log('Logged In!',data)
    })
    .catch(err=>{
      console.error('Failed to log in',err);
    })
  };


  return (
    <div >
    <form onSubmit={onSubmit}>
    <input value={email} onChange={event=>setEmail(event.target.value)}/>
    <input value={password} onChange={event=>setPassword(event.target.value)}/>
    <button type='submit'>Login</button>

    </form>
    </div>
  );
}

export default LogIn;
