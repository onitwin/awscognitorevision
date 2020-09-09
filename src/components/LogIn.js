import React ,{useState} from 'react';
import {CognitoUser,AuthenticationDetails} from 'amazon-cognito-identity-js';
import UserPool from '../UserPool'

const SignUp=() =>{

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');



  const onSubmit=event=>{
    event.preventDefault();

    const user= new CognitoUser({ //sets 'user' as a new cognito user with username and pool details contained
      Username:email,
      Pool:UserPool
    })

    const authDetails= new AuthenticationDetails({
      Username:email,
      Password:password
    })

    user.authenticateUser(authDetails,{
      onSuccess:data=>{
        console.log('onSuccess',data);
      },
      onFailure:err=>{
        console.error('onFailure',err);
      },
      newPasswordRequired:data=>{
        console.log('newPasswordRequired',data);
      }

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

export default SignUp;
