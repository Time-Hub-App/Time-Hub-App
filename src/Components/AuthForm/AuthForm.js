import React from 'react';

export default function AuthForm({ email, setEmail, password, setPassword, handleSubmit, errorMsg }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <p>{errorMsg}</p>
      <input type="submit" />
    </form>
  );
}
