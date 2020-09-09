import React ,{createContext} from 'react'; // createContext should be used when variables are required to have global scope
import {CognitoUser,AuthenticationDetails} from 'amazon-cognito-identity-js'; //destructured required classes
import Pool from '../UserPool'


const AccountContext=createContext(); //everything below is part of created context

const Account = props =>{

  const authenticate= async (Username,Password)=>

    await new Promise((resolve,reject)=>{
      const user= new CognitoUser({Username,Pool}) //sets 'user' as a new cognito user with username and pool details contained

      const authDetails= new AuthenticationDetails({Username,Password})

      user.authenticateUser(authDetails,{ //'user' calls authenticateUser method and passes in email and password from authDetails
        onSuccess:data=>{
          console.log('onSuccess',data); //successful log in returns this
          resolve(data)
        },
        onFailure:err=>{
          console.error('onFailure',err);//unsuccessful log in returns this
          reject(err);
        },
        newPasswordRequired:data=>{
          console.log('newPasswordRequired',data); //new password request returns this
          resolve(data);
        }
      });
    })


  return(
    <AccountContext.Provider value={{authenticate}}>
    {props.children}
    </AccountContext.Provider>
  );
}

export {Account,AccountContext};
