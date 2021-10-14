import React, { useContext, useState } from "react";
import "../App.css";
import noteContext from "../Context/notes/notesContext";
import Board from "./DragDrop/board";
import Card from "./DragDrop/Card";
import NoteItem from "./Todos/NoteIteam";

function Home() {
	const context = useContext(noteContext);
	const { statusTodo, statusProgress, statusDone, notes, addTodo, isOpen } =
		context;
	const [type, setType] = useState("status");

	return type === "status" ? (
		<main className="flexbox">
			<span className="ToggleButton">
				<p
					style={{
						color: "white",
						display: "inline-block",
						margin: "0px 10px",
					}}
				>
					view By
				</p>
				<button
					style={{
						padding: "2px 8px",
					}}
					onClick={() => {
						setType("AllTodos");
					}}
				>
					List
				</button>
			</span>
			<Board id="todo" className="board" heading="Todo">
				{statusTodo.map((item) => (
					<Card id={item.id} className="card" draggable="true">
						<NoteItem el={item} />
					</Card>
				))}
			</Board>
			<Board id="progress" className="board" heading="In Progress">
				{statusProgress.map((item) => (
					<Card id={item.id} className="card" draggable="true">
						<NoteItem el={item} />
					</Card>
				))}
			</Board>
			<Board id="Done" className="board" heading="Done">
				{statusDone.map((item) => (
					<Card id={item.id} className="card" draggable="true">
						<NoteItem el={item} />
					</Card>
				))}
			</Board>
		</main>
	) : (
		<main className={`AllTodo`}>
			<span className="ToggleButton">
				<p
					style={{
						color: "white",
						display: "inline-block",
						margin: "0px 10px",
					}}
				>
					view By
				</p>
				<button
					style={{
						padding: "2px 8px",
					}}
					onClick={() => {
						setType("status");
					}}
				>
					Status
				</button>
			</span>
			<div className="spaceEvenly">
				{notes.map((item, index) => {
					return <NoteItem el={item} key={index} className={"ListTodos"} />;
				})}
			</div>
		</main>
	);
}

export default Home;
