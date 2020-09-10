import React ,{useState} from 'react'


const ChangePassword=()=>{

  const [password,setPassword]=useState(''); //receives value of original password from form
  const [newPassword,setNewPassword]=useState(''); //receives value of new password from form



  const onSubmit=event=>{
    event.preventDefault()
    console.log(password,newPassword)
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
