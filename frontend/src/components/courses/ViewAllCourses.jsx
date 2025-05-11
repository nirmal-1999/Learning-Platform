import React from 'react'
import { useLocation } from 'react-router-dom'
import CourseCard from './CourseCard';

function ViewAllCourses() {
    const location = useLocation();
    const courseTitle = location.state?.title;
    const courses = location.state?.courses || [];

    return (
        <div className='flex-grow' style={{ backgroundColor: "rgb(244, 242, 238)" }}>
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-xl font-semibold pt-4 pb-6">{courseTitle}</h2>
                <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <CourseCard courses={courses} />
                </div>
            </div>
        </div>
    )
}

export default ViewAllCourses