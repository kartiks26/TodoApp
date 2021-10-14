import React, { useState } from "react";
import "./Signup.css";
import styled from "styled-components";
function Signup(props) {
	const [display, setDisplay] = useState(true);
	const { signupPage, setSignupPage, setLoginPage, loginPage } = props;
	return (
		<div className="Signupbackground">
			<div className={`Signup  ${display ? "active" : "inactive"}`}>
				<h1
					style={{
						color: "black",
						marginLeft: "20px",
						marginTop: "20px",
					}}
				>
					Spot Todo
				</h1>
				<form className="loginForm" action="#">
					<input
						type="text"
						autoComplete="off"
						className="Signupinputs"
						placeholder="username"
					/>
					<input type="email" className="Signupinputs" placeholder="email" />
					<input
						type="password"
						className="Signupinputs"
						placeholder="password"
					/>
					<input
						type="password"
						className="Signupinputs"
						placeholder="confirm Password"
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
						}}
						className="SignupButton"
					>
						Signup
					</button>
					<p
						style={{
							color: "black",
						}}
					>
						already have an account?{" "}
						<a
							className="aSignup"
							style={{
								cursor: "pointer",
							}}
							onClick={() => {
								setLoginPage(true);
								setSignupPage(false);
							}}
						>
							Login
						</a>
					</p>
				</form>
				<img
					className="cross"
					onClick={() => {
						setDisplay(!display);
						setSignupPage(!signupPage);
					}}
					src="/images/cross.svg"
				/>
			</div>
			<div className="Signupimg">
				<img src={"/images/signup.svg"} />
			</div>
		</div>
	);
}

export default Signup;
