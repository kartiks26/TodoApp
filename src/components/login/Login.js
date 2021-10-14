import React, { useState } from "react";
import "./login.css";
function Login(props) {
	const [display, setDisplay] = useState(true);
	const { loginPage, setLoginPage, setSignupPage } = props;
	return (
		<div className="background">
			{/* <button
				className="Signup-button"
				onClick={() => {
					setDisplay(!display);
				}}
			>
				Login
			</button> */}
			<div className={`Login  ${display ? "active" : "inactive"}`}>
				<h1
					style={{
						marginLeft: "20px",
						marginTop: "20px",
					}}
				>
					Spot Todo
				</h1>
				<form className="loginForm" action="#">
					<input type="email" className="inputs" placeholder="email" />
					<input type="email" className="inputs" placeholder="password" />
					<button
						onClick={(e) => {
							e.preventDefault();
						}}
						className="loginButton"
					>
						Login
					</button>
					<p>
						dont't have an account?{" "}
						<a
							style={{
								cursor: "pointer",
							}}
							onClick={() => {
								setLoginPage(false);
								setSignupPage(true);
							}}
						>
							Signup
						</a>
					</p>
				</form>
				<img
					className="cross"
					onClick={() => {
						setLoginPage(false);
						setSignupPage(false);
						console.log(loginPage);
					}}
					src="/images/cross.svg"
				/>
			</div>
			<div className="Loginimg">
				<img src={"/images/login.svg"} />
			</div>
		</div>
	);
}

export default Login;
