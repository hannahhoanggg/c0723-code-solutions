import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  let validationClass = 'is-invalid';
  let message = '';

  if (password.length === 0) {
    message = 'A password is required.';
  } else if (password.length < 8) {
    message = 'Your password is too short.';
  } else {
    message = '';
    validationClass = 'is-valid';
  }

  return (
    <div form-group position-relative m-5>
      <form>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className={`form-control ${validationClass}`}
        />
        <div className={`display ${validationClass}`}>{message}</div>
      </form>
    </div>
  );
}
