import React ,{useState} from 'react';
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import {Account} from './components/Accounts'

const App=() =>{




  return (
    <Account>
      <SignUp/>
      <LogIn/>
    </Account>
  );
}

export default App;
