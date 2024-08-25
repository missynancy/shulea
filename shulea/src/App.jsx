// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Logins/MainLogin';
import StudentLogin from './Logins/StudentLogin';
import TutorLogin from './Logins/TutorLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/tutor-login" element={<TutorLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
