// pages/login.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import Link from 'next/link';
function LoginPage() {
  const handleLogin = () => {
    // Handle successful login, e.g., redirect to dashboard
    // This function will be called when the form submits successfully
    console.log('Login successful');
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
      <Link href={'/register'}>Registration</Link>
    </div>
  );
}
export default LoginPage;
