import React ,{useState} from 'react';
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import {Account} from './components/Accounts'
import Status from './components/Status'
import Settings from './components/Settings'

const App=() =>{




  return (
    <Account>
    <Status/>
      <SignUp/>
      <LogIn/>
      <Settings/>
    </Account>
  );
}

export default App;
