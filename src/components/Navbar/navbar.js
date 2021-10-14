import React, { useState, useEffect, useContext } from "react";
import "./navbar.css";
import Login from "../login/Login";
import Signup from "../Signup/Signup";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useLocation,
} from "react-router-dom";
import AddTodo from "../AddTodo/AddTodo";
import noteContext from "../../Context/notes/notesContext";

function Navbar() {
	const context = useContext(noteContext);

	const { addTodo, setAddTodo, isOpen, setIsOpen } = context;

	// States For User LOGIN SIGNUP AND DROPDOWN
	// Dropdown
	// Login PAge Toggle
	const [loginPage, setLoginPage] = useState(false);
	// Signup Page Toggle
	const [signupPage, setSignupPage] = useState(false);
	return (
		<div className="navbar">
			<nav className="navs">
				<h1 className="logo">
					<Link
						className="Link
				"
						to="/"
					>
						Lets Do It
					</Link>
				</h1>
				<li
					onClick={() => {
						setAddTodo(!addTodo);
					}}
					className=" lis Link Adds"
				>
					AddTodo
				</li>
				<ul className="uls">
					<Link className={`lis Link `} to="/">
						Home
					</Link>
					<Link className={`lis Link `} to="/about">
						About
					</Link>
					<li
						onClick={() => {
							setIsOpen(!isOpen);
						}}
						className="lis"
					>
						User
					</li>
					<div className={`loginSignup ${isOpen ? "loginSignupActive" : ""}`}>
						<li
							className="lisa slideins"
							onClick={() => {
								setLoginPage(!loginPage);
								setSignupPage(false);
								setIsOpen(false);
							}}
						>
							Login
						</li>
						<li
							className="lisa slideins"
							onClick={() => {
								setLoginPage(false);
								setSignupPage(true);
								setIsOpen(false);
							}}
						>
							Signup
						</li>
					</div>
				</ul>
			</nav>
			{loginPage ? (
				<Login
					setLoginPage={setLoginPage}
					loginPage={loginPage}
					setSignupPage={setSignupPage}
					signupPage={signupPage}
				/>
			) : null}
			{signupPage ? (
				<Signup
					setSignupPage={setSignupPage}
					signupPage={signupPage}
					setLoginPage={setLoginPage}
					loginPage={loginPage}
				/>
			) : null}
			{addTodo ? <AddTodo setAddTodo={setAddTodo} addTodo={addTodo} /> : null}
		</div>
	);
}

export default Navbar;
