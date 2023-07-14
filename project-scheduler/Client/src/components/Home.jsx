import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import StudentLogIn from './StudentLogIn';
import TeacherLogIn from './TeacherLogin';
import './Home.css';


const Home = () => {

   return (
   
      
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="col-md-9 col-lg-6 col-xl-5">
                     <h2 className='display-4'> Schedule your project with your flexiblity</h2>

                  </div>
               </div>
               <div className="col">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                     className="img-fluid" alt="Sample image" />
               </div>
               <div className="col">
                  <div className="col-md-9  col-xl-5 " >
                     <Link to="/teacherlogin/*">
                     <button type="button"   className="btn btn-outline-dark" >Teacher LogIn </button><br />
                     </Link>
                     <Link to="/studentlogin/*">
                     <button type="button"   className="btn btn-outline-dark">Student LogIn</button>
                     </Link>
                     
                  </div>
               </div>
            </div>
            <Routes>
                <Route exact path="/studentlogin/*" element={<StudentLogIn/>} />
                <Route exact path="/teacherlogin/*" element={<TeacherLogIn/>} />
            </Routes>
            
         </div>
        
         
         
   )
};

export default Home;
