// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logins.css'

const LoginPage = () => {
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    navigate('/student-login');
  };

  const handleTutorLogin = () => {
    navigate('/tutor-login');
  };

  return (
    <div className="login-page">
      <h1>Welcome To <span>Shulea</span></h1>
      <h3>Join as</h3>
      <div className="login-btn">
        <button onClick={handleStudentLogin}>Student Login</button>
        <button onClick={handleTutorLogin}>Tutor Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
