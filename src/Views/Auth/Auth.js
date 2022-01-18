import classNames from 'classnames';
import React, { useState } from 'react';
import AuthForm from '../../Components/AuthForm/AuthForm';
import { signInUser, signupUser } from '../../Services/users';

export default function Auth({ setUser }) {
  const [type, setType] = useState('Login');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'Login') {
        resp = await signInUser(email, password);
      } else {
        resp = await signupUser(email, username, password);
      }
      setUser(resp);
    } catch {
      setErrorMsg('Your email and/or password is incorrect, please try again or sign up. ');
    }
  };
  return (
    <div className="signInPage">
      <h3>{type}</h3>
      <AuthForm email={email} setEmail={setEmail} username={username} setUsername={setUsername} password={password} setPassword={setPassword} errorMsg={errorMsg} handleSubmit={handleSubmit} />
      <button onClick={() => { setType('Sign Up'); } }
        className={classNames({ active: type === 'Sign Up' })}>Sign Up</button>
            
    </div>
  );
}
