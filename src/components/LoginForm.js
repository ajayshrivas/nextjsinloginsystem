// components/LoginForm.js
import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      console.log(response.ok);
      if (response.ok) {
        onLogin(); // Call the provided callback to handle successful login
        const responseData = await response.json();

        const redirectTo = responseData.redirectTo; // Get the redirectTo URL from the response
       // Redirect to the specified URL (e.g., dashboard page)
         window.location.href = redirectTo;
      } else {
        // Handle login error
      }
    } catch (error) {
      // Handle fetch error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
