import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  
  let history = useNavigate(); 
  

  useEffect(() => {
    fetch('http://localhost:9001/dis-student')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching teacher details: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  
  return (
    <div className="container">
      <h2 className="mt-3 " >Student List</h2>
      <ul className="list-group mt-4">
        {students.map((student) => (
          <li key={student._id} className="list-group-item">
            <p>Name: {student.studentName}</p>
            <p>Roll No: {student.studentRoll}</p>
          </li>
        ))}
      </ul>
      <div className="container" >
          <button className="btn btn-success hBack " onClick={()=>history(-1)}  type="button">Back</button>
      </div>
      
    </div>
  );
};

export default StudentList;
