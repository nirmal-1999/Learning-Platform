import React from 'react'
import { useNavigate } from 'react-router-dom';

function CourseCard({courses}) {
    const navigate = useNavigate();

    const handleClick = (title) => {
        const slug = title.toLowerCase().replace(/\s+/g, '-');
        navigate(`/courses/${slug}`);
    };

    return (
        <>
            {courses.map((course, index) => (
                <div
                    onClick={() => handleClick(course.courseName)}
                    key={index}
                    className="bg-white rounded-xl mb-3 overflow-hidden shadow-md w-[280px] flex-shrink-0 hover:shadow-2xl cursor-pointer"
                >
                    <div className="relative h-40 w-full">
                        <img
                            src={course.courseImage}
                            alt={course.courseName}
                            className="h-40 w-full object-cover rounded"
                        />
                        {course.duration && (
                            <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                                {course.courseDuration}
                            </span>
                        )}
                    </div>
                    <div className="p-3">
                        <p className="text-xs text-gray-500 mb-1">Course</p>
                        <h3 className="text-base font-semibold leading-snug line-clamp-2 mb-1">{course.courseName}</h3>
                        <p className="text-sm text-gray-600 mb-1">By: {course.authorName}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CourseCard