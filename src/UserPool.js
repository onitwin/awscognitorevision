import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData={
  UserPoolId:'eu-west-1_NGQxACIUd',
  ClientId:'40jvhommm7tm3tdaamoo1ge1n4'
}

export default new CognitoUserPool(poolData);
