import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import './StudentLogin.css';
import AdminRegisterTeacher from './AdminRegisterTeacher.jsx';

const Admin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if name, SID, and password are valid
    if (name ==='Sid' && password === '12345') {
      // Navigate to the registration page
      window.location.href = '/admin-register-teacher';
    } else {
      // Display an alert for wrong name and password
      alert('Wrong name and password!');
    }
  };

  return (
    <div className="container">
      <h1 className="display-4 d-flex justify-content-center login">Login As Admin</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example3"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example3">
            Password
          </label>
        </div>

        <button type="submit" className="btn bg-success btn-block mb-4">
          Submit
        </button>
      </form>

      <Routes>
        <Route path="/admin-register-teacher" element={<AdminRegisterTeacher />} />
      </Routes>
    </div>
  );
};

export default Admin;
