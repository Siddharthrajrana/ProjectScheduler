import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import StudentLogIn from './StudentLogIn';
import TeacherLogIn from './TeacherLogin';
import LandPage from './LandPage/LandPage';
import AdminRegisterTeacher from './AdminRegisterTeacher';
import TeacherRegisterStudent from './TeacherRegisterStudent';
import Admin from './Admin';
import TeacherList from './TeacherList';
import StudentList from './StudentList';

const Navbar = () => {

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to='/' className="navbar-brand" >DIST ProScheduler</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink  to="/home" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More 
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink to="/studentlogin" className="dropdown-item" >Student LogIn</NavLink>
                                <NavLink to="/teacherlogin" className="dropdown-item" >Teacher LogIn</NavLink>
                                <div className= "dropdown-divider"></div>
                                <NavLink  to="/admin/*"className="dropdown-item">LogIn as Admin</NavLink>
                            </div>
                        </li>
        
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Routes>
                <Route exact path="/home/*" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/studentlogin/*" element={<StudentLogIn/>} />
                <Route exact path="/teacherlogin/*" element={<TeacherLogIn/>} />
                <Route exact path="/" element={<LandPage/>} />
                <Route exact path="/admin/*/*" element={<Admin/>}/>
                <Route exact path="/admin-register-teacher/*" element={<AdminRegisterTeacher/>}/>
                <Route path="/teacher-register-student/*" element={<TeacherRegisterStudent />} />
                <Route path="/display-teacher" element={<TeacherList/>}></Route>
                <Route path="/display-student" element={<StudentList/>}></Route>
            </Routes>
            <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
            </footer>

        </BrowserRouter>

    )
};

export default Navbar;
