import { useState } from "react";
import Login from "./components/login/Login";
import Navbar from "./components/Navbar/navbar";
import Signup from "./components/Signup/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Board from "./components/DragDrop/board";
import Card from "./components/DragDrop/Card";
import "./components/DragDrop/dragdrop.css";
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/about">
					<Navbar />
					<About />
				</Route>
				<Route exact path="/">
					<Navbar />
					<div className="main">
						<Home />
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
