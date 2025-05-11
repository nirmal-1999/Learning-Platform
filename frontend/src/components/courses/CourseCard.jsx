import React from 'react'

function CourseCard({courses}) {
    return (
        <>
            {courses.map((course, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl mb-3 overflow-hidden shadow-md w-[280px] flex-shrink-0 hover:shadow-2xl cursor-pointer"
                >
                    <div className="relative h-40 w-full">
                        <img
                            src={course.image}
                            alt={course.title}
                            className="h-40 w-full object-cover rounded"
                        />
                        {course.duration && (
                            <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                                {course.duration}
                            </span>
                        )}
                    </div>
                    <div className="p-3">
                        <p className="text-xs text-gray-500 mb-1">Course</p>
                        <h3 className="text-base font-semibold leading-snug line-clamp-2 mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">By: {course.author}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CourseCard