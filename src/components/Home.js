import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3001").then(res => res.json())
      .then((data) => setCourses(data))
      .catch(error => {
        console.error(error)
      })
  }, [])
  return (
    <div>
      {/* {
        courses.map((course) => {
         <div className="course-box">
          <h1>Name: {course.name}</h1>
          <h2>ID: {course.id}</h2>
         </div>
        })
      } */}
      {courses.map(
        course => {
          <div key={course}> course</div>
        }
      )}
    </div>
  );
};

export default Home;
