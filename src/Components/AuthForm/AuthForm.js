import React from 'react';
import './AuthForm.css';

export default function AuthForm({
  type,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  errorMsg,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {type === 'Sign Up' ? (
        <>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </>
      ) : (
        <>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </>
      )}

      <p>{errorMsg}</p>
      <button type="submit">submit</button>
    </form>
  );
}
