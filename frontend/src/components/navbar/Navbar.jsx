import React, { useEffect, useState } from "react";
import UserDropdown from "./UserDropdown.jsx";

function Navbar() {

	return (
		<>
			<nav className="bg-white shadow p-4 flex justify-between items-center">
				<div className="text-xl font-bold text-indigo-600">Learn Easy</div>
				<div className="space-x-6">
					<a href="#" className="hover:text-indigo-600">
						Home
					</a>
					<a href="#" className="hover:text-indigo-600">
						Courses
					</a>
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
