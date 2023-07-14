import React from 'react';
import  './StudentLogin.css'

const StudentLogIn = () => {
    return (

        <div className='container' id="student">
            <h1  className="display-4 d-flex justify-content-center login" >Student Login</h1>
        <form>

            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" />
                <label className="form-label" htmlFor="form2Example1">Name </label>
            </div>

            <div className="form-outline mb-4">
                <input type="text" id="form2Example2" className="form-control" />
                <label className="form-label" htmlFor="form2Example2">Roll Number</label>
            </div>
           

            <div className="row mb-4">
                <div className="col d-flex justify-content-center">

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                    </div>
                </div>

            </div>


            <button type="button" className="btn  bg-success btn-block mb-4">Log in</button>

        </form>
        </div>
    )
};

export default StudentLogIn;
