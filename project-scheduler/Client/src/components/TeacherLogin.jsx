import React from 'react';
import './StudentLogin.css'
import TeacherRegisterStudent from './TeacherRegisterStudent';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

const TeacherLogIn = () => {

    const [name, setName] = useState('');
    const [Id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if name, SID, and password are valid
        if (name === 'Sid' && Id === '12345') {
            // Navigate to the registration page
            window.location.href = '/teacher-register-student';
        } else {
            // Display an alert for wrong name and password
            alert('Wrong name and password!');
        }
    };
    return (

        <div className='container'>
            <h1 className="display-4 d-flex justify-content-center login" >Teacher Login</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-outline mb-4">
                    <input
                        type="text"
                        id="form2Example1"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <label className="form-label" htmlFor="form2Example1">Name </label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text"
                        id="form2Example3"
                        className="form-control"
                        value={Id}
                        onChange={(e) => setId(e.target.value)} />
                    <label className="form-label" htmlFor="form2Example2">Identity Number </label>
                </div>


                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                </div>


                <button type="submit" className="btn bg-success btn-block mb-4">Log in</button>

                <Routes>
                    <Route path="/teacher-register-student" element={<TeacherRegisterStudent />} />
                </Routes>
            </form>
        </div>
    )
};

export default TeacherLogIn;
