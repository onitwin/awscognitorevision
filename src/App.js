import React ,{useState} from 'react';
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import {Account} from './components/Accounts'
import Status from './components/Status'

const App=() =>{




  return (
    <Account>
    <Status/>
      <SignUp/>
      <LogIn/>
    </Account>
  );
}

export default App;
