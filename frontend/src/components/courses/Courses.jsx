import React, { useEffect, useState } from 'react'
import TopCourses from './TopCourses'
import axios from 'axios';

function Courses() {
  const [userRole, setUserRole] = useState("");
  const [courses, setCourses] = useState([]);

  const getAllCourses = async () => {
    try {
      const username = localStorage.getItem("username");
      if (!username) {
        console.error("Username not found in localStorage");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/courses/all/${username}`
      );

      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  }

  useEffect(() => {
    getAllCourses();
  },[courses]);

  return (
    <div className='flex-grow' style={{ backgroundColor: "rgb(244, 242, 238)" }}>
      {courses.map((course, idx) => (
        <TopCourses key={course.departmentId} title={course.departmentName} courses={course.courses} />
      ))}
    </div>
  )
}

export default Courses