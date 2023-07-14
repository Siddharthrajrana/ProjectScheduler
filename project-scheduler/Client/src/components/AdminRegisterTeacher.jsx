import React , {useState } from 'react';
import TeacherList from './TeacherList';
import StudentList from './StudentList';
import { Routes, Route, Link } from "react-router-dom";



const AdminRegisterTeacher = () => {
    
    const[name , setName] = useState("");
    const[email ,setEmail]= useState("");
    const[teacherId ,setTeacherId] = useState("");
   

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:9001/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, teacherId }),
          });
    
        const result = await response.json();
        console.log(result);
        alert('Data saved successfully');
        setName('');
        setEmail('');
        setTeacherId('');
        } catch (error) {
          console.error('Error:', error);
          alert('Something went wrong');
        }
        
      };
    
    return (
        
        <div>
            <section className="vh-100">
                <div className="container h-100">
                <div id="dataContainer"></div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <Link to="/display-teacher">
                        <label className="btn btn-secondary active" >
                            <input type="radio" name="options" id="option1" /> Check Total Registered Teachers 
                        </label>
                        </Link>
                        <Link to="/display-student">
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2"  /> Check Total Registered Students 
                        </label>
                        </Link>
    
                    </div>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black ">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register Teacher</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control"
                                                        value={name} onChange={(e) => setName(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example1c">Teacher's Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control"
                                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example3c">Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example4c" className="form-control" 
                                                             value={teacherId} onChange={(e) => setTeacherId(e.target.value)}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example4c">Assign Teacher's Id</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-success btn-lg"
                                                    onClick={handleOnSubmit}>Register</button>
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
                        </div>
                    </div>
                </div>
            </section>
            <Routes>
                <Route exact path="/display-teacher/*" element={<TeacherList/>} />
                <Route exact path="/display-student/*" element={<StudentList/>} />
                
            </Routes>
        </div>
    );
};

export default AdminRegisterTeacher;


