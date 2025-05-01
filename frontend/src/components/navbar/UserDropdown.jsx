import React, { useState, useRef, useEffect } from "react";
import { initKeycloak, logOut, login } from "../../service/KeycloakService.js";
import {ArrowLeftCircle, ArrowRightCircle, BookOpen, User, ShoppingCart, Settings, HelpCircle} from 'lucide-react';


export default function UserDropdown() {

	const [open, setOpen] = useState(false);
	const dropdownRef = useRef(null);
	const [authenticated, setAuthenticated] = useState(false);
	const [name, setName] = useState("");
	const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();

	useEffect(() => {
		initKeycloak({setAuthenticated, setName});
	}, []);

	const handleSignIn = (e) => {
		e.preventDefault();
		login();
	};

	const handleLogOut = (e) => {
		e.preventDefault();
		logOut();
		setAuthenticated(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const menuList = [
		{ label: "Profile", icon: <User size={16}/>, onClick: () => { } },
		{ label: "My Purchases", icon: <ShoppingCart size={16} />, onClick: () => { } },
		{ label: "My Courses", icon: <BookOpen size={16} />, onClick: () => { } },
		{ label: "Settings", icon: <Settings size={16} />, onClick: () => { } },
		{ label: "Help Center", icon: <HelpCircle size={16} />, onClick: () => { } },
	];

	return (
		<div className="relative inline-block text-left" ref={dropdownRef}>
			<button
				onClick={() => setOpen(!open)}
				className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-900 text-white font-bold"
			>
				{authenticated ? initials : "UN"}
			</button>

			{open && (
				<div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
					<div className="py-1">
						{authenticated ? (
							<>
								<h1 className="w-full text-left px-4 py-2">Hi {name}</h1>
								{menuList.map((item, idx) => (
									<button
										key={idx}
										onClick={item.onClick}
										className="flex items-center gap-2 block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									>
										{item.icon}
										{item.label}
									</button>
								))}
								<button
									onClick={handleLogOut}
									className="flex items-center gap-2 block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
								>
									<ArrowLeftCircle size={16} />
									Log Out
								</button>
							</>
						) : (
							<button
								onClick={handleSignIn}
								className="flex items-center gap-2 block w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
							>
								<ArrowRightCircle size={16} />
								SIGN IN / LOGIN
							</button>
						)}
					</div>

				</div>
			)}
		</div>
	);
}
