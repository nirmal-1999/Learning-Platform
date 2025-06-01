import React, { useEffect, useState } from "react";
import UserDropdown from "./UserDropdown.jsx";
import { Link } from "react-router-dom";
import AddCourseModal from "../models/AddCourseModal .jsx";
import axios from "axios";

function Navbar() {
	const [name, setName] = useState("");
	const [addCourseModalOpen, setAddCourseModalOpen] = useState(false);
	const username = localStorage.getItem("username");

	const handleAddCourse = async (formData) => {

		const [hours, minutes] = formData.duration.split(":");
		const formattedDuration = `${parseInt(hours)}h ${parseInt(minutes)}m`;

		const imagePath = `/images/${formData.image.name}`;

		const payload = {
			username,
			author_name: name,
			department: formData.department,
			course_name: formData.course_name,
			image: imagePath,
			duration: formattedDuration,
		};

		try {
			await axios.post(`${import.meta.env.VITE_BACKEND_URL}/courses/add`, payload);
			alert("Course added successfully!");
			setAddCourseModalOpen(false)
		} catch (error) {
			console.error("Error adding course:", error);
			alert("Failed to add course.");
			setAddCourseModalOpen(false)
		}
	};


	return (
		<>
			<nav className="bg-white shadow p-2 flex justify-between items-center px-4">
				<div className="text-xl font-bold text-indigo-600 pl-6">Learn Easy</div>
				<div className="space-x-6">
					<Link to="/home" className="hover:text-indigo-600">
						Home
					</Link>
					<button className="hover:text-indigo-600" onClick={() => setAddCourseModalOpen(true)}>
						Add Course
					</button>
					<Link to="/courses" className="hover:text-indigo-600">
						Courses
					</Link>
					<a href="#" className="hover:text-indigo-600">
						About
					</a>
					<UserDropdown name={name} setName={setName} />
				</div>
			</nav>

			<AddCourseModal
				isOpen={addCourseModalOpen}
				onClose={() => setAddCourseModalOpen(false)}
				onSubmit={handleAddCourse}
			/>
		</>
	);
}

export default Navbar;
