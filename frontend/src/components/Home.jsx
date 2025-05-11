import React from "react";
import TeacherDetails from "./TeacherDetails";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

	const navigate = useNavigate();

	return (
		<div className="flex-grow">
			<header className="text-center py-10 bg-indigo-100">
				<h1 className="text-4xl font-bold mb-4">Welcome to Learn Easy</h1>
				<p className="text-lg text-gray-700 mb-6">
					Learn new Courses, build your future.
				</p>
				<button
					onClick={(e) => navigate("/courses")}
					className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500 cursor-pointer"
				>
					Explore Courses
				</button>
			</header>
			<TeacherDetails />
		</div>
	);
};

export default HomePage;
