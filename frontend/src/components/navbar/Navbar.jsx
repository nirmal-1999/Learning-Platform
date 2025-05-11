import React, { useEffect, useState } from "react";
import UserDropdown from "./UserDropdown.jsx";
import { Link } from "react-router-dom";

function Navbar() {

	return (
		<>
			<nav className="bg-white shadow p-2 flex justify-between items-center px-4">
				<div className="text-xl font-bold text-indigo-600 pl-6">Learn Easy</div>
				<div className="space-x-6">
					<Link to="/home" className="hover:text-indigo-600">
						Home
					</Link>
					<Link to="/courses" className="hover:text-indigo-600">
						Courses
					</Link>
					<a href="#" className="hover:text-indigo-600">
						About
					</a>
					<UserDropdown />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
