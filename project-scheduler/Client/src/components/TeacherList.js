import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);

  let history = useNavigate();

  useEffect(() => {
    fetch('http://localhost:9001/dis-teacher')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching teacher details: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setTeachers(data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  }, []);



  const handleDeleteTeacher = (teacherId) => {
    fetch(`http://localhost:9001/delete-teacher/${teacherId}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error deleting teacher: ' + response.status);
        }
        // Filter out the deleted teacher from the state
        setTeachers(teachers.filter((teacher) => teacher._id !== teacherId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2 className="mt-4">Teacher List</h2>
      <ul className="list-group mt-4">
        {teachers.map((teacher) => (
          <li key={teacher._id} className="list-group-item">
            <h3>{teacher.name}</h3>
            <p>Email: {teacher.email}</p>
            <p>Teacher ID: {teacher.teacherId}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTeacher(teacher._id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="container">
        <button className="btn btn-success hBack" onClick={() => history(-1)} type="button">
          Back
        </button>
      </div>
    </div>
  );
};

export default TeacherList;
