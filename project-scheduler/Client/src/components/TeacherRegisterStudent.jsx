import React, { useState } from 'react';
import StudentList from './StudentList';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const TeacherRegisterStudent = () => {

    const [studentName, setStudentName] = useState("");
    const [studentRoll, setStudentRoll] = useState("");

    let history = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:9001/registerstudent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ studentName, studentRoll }),
            });

            const result = await response.json();
            console.log(result);
            alert('Data saved successfully');
            setStudentName('');
            setStudentRoll('');
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong');
        }


    };

    return (
        <div>
            <section className="vh-100">
                <div className="container h-100">

                    <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">


                        <Link to="/display-student">
                            <label className="btn btn-secondary  ">
                                <input type="radio" name="options" id="option1" />Total Registered Students
                            </label>
                        </Link>
                        <Link to="/display-student">
                            <label className="btn btn-secondary ">
                                <input type="radio" name="options" id="option1" /> Schedule Your Time Slot
                            </label>
                        </Link>




                    </div>

                    <div className="row d-flex justify-content-center align-items-center h-50">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black ">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register Student</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control"
                                                            value={studentName} onChange={(e) => setStudentName(e.target.value)}

                                                        />
                                                        <label className="form-label" htmlFor="form3Example1c">Student's Name</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example4c" className="form-control"
                                                            value={studentRoll} onChange={(e) => setStudentRoll(e.target.value)}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example4c">Student's Roll Number </label>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" onClick={handleOnSubmit} className="btn btn-success btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="d-flex h-50">
                                <div className="align-self-start mr-auto">
                                    <button type="button" className="btn btn-success" onClick={() => history(-1)}>
                                        BackWard
                                    </button>
                                </div>

                                <div className="align-self-end ml-auto">
                                    <button type="button" className="btn btn-success" onClick={() => history(+1)}>
                                        Forward
                                    </button>
                                </div>
                            </div>


                        </div>

                    </div>
                    <Routes>

                        <Route exact path="/display-student/*" element={<StudentList />} />

                    </Routes>
                </div>
            </section>

        </div>
    );
};

export default TeacherRegisterStudent;


