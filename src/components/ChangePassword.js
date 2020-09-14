import React ,{useState,useContext} from 'react'
import {AccountContext} from './Accounts'


const ChangePassword=()=>{

  const [password,setPassword]=useState(''); //receives value of original password from form
  const [newPassword,setNewPassword]=useState(''); //receives value of new password from form

  const {getSession,authenticate}=useContext(AccountContext)





  const onSubmit=event=>{
    event.preventDefault()

    getSession().then(({user,email})=>{
      authenticate(email,password)
      .then(()=>{
         user.changePassword(password,newPassword,(err,result)=>{
          if(err) console.error(err)
          console.log(result)
        })
      })
    })
  }


  return(
    <div>
    Change Password
    <form onSubmit={onSubmit}>
    <input value={password} onChange={event =>setPassword(event.target.value)}/>
    <input value={newPassword} onChange={event =>setNewPassword(event.target.value)}/>
    <button type='Submit'>Change Password</button>

    </form>
    </div>
  )
}

export default ChangePassword;
