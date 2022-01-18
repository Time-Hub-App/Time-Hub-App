import classNames from 'classnames';
import React, { useState } from 'react';
import AuthForm from '../../Components/AuthForm/AuthForm';
import Header from '../../Components/Header/Header';
import { signInUser, signUpUser } from '../../Services/users';

export default function Auth({ setUser }) {
  const [type, setType] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'Login') {
        resp = await signInUser(email, password);
      } else {
        resp = await signUpUser(email, password);
      }
      setUser(resp);
    } catch (e) {
      setErrorMsg(`Your email/password is incorrect, try again or sign up: ${e.message}`);
    }
  };
  return (
    <div className="complete">
      <Header />
      <h3>{type}</h3>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMsg={errorMsg}
        handleSubmit={handleSubmit}
      />
      <button
        onClick={() => {
          setType('Sign Up');
        }}
        className={classNames({ active: type === 'Sign Up' })}
      >
        Sign Up
      </button>
      <button
        onClick={() => {
          setType('Login');
        }}
        className={classNames({ active: type === 'Login' })}
      >
        Login
      </button>
    </div>
  );
}
