import React from 'react';

export default function AuthForm({
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  errorMsg,
  handleSubmit
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <p>{errorMsg}</p>
      <input type="submit" />
    </form>
  );
}
