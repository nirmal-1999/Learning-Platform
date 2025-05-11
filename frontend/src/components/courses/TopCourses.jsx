import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";


function TopCourses({ title, courses }) {
    const scrollRef = useRef(null);
    const navigate = useNavigate();

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="bg-white pt-3 m-6 rounded-xl shadow-md relative">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold ml-10">{title}</h2>
                <div className="flex items-center text-blue-600 mr-3 cursor-pointer hover:underline">
                    <span className="mr-1" onClick={(e) => navigate("/view-course-list", {
                        state: {title: title, courses: courses}
                    })}>
                        View All
                    </span>
                    <ArrowRight size={18} />
                </div>
            </div>

            <div className="relative">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 shadow"
                >
                    <ChevronLeft size={20} />
                </button>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-hidden space-x-4 scroll-smooth px-10"
                >
                    <CourseCard courses={courses}/>
                </div>
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 rounded-full p-2 shadow"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}


export default TopCourses;