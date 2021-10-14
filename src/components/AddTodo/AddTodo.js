import React, { useContext, useState } from "react";
import "./AddTodo.css";
import noteContext from "../../Context/notes/notesContext";
import { v4 } from "uuid";
import NoteState from "../../Context/notes/notesState";
function AddTodo(props) {
	const context = useContext(noteContext);
	const {
		addTodo,
		setAddTodo,
		statusTodo,
		statusProgress,
		statusDone,
		setStatusTodo,
		setStatusProgress,
		setStatusDone,
		setNotes,
		notes,
	} = context;
	const [todoData, setTodoData] = useState({
		id: v4(),
		title: "",
		description: "",
		dueDate: "",
		status: "todo",
	});
	const handelOnAdd = () => {
		if (todoData.title.length === 0) {
			alert("Please Enter Title");
		} else {
			console.log(todoData);
			if (todoData.status === "todo") {
				setStatusTodo([...statusTodo, todoData]);
			} else if (todoData.status === "progress") {
				setStatusProgress([...statusProgress, todoData]);
			} else if (todoData.status === "done") {
				setStatusDone([...statusDone, todoData]);
			}
			setNotes([...notes, todoData]);
		}
		setAddTodo(false);
	};
	const handelOnChange = (e) => {
		setTodoData({
			...todoData,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className={` ${addTodo ? "newTodoDiv" : " "}`}>
			<div className={`addTodo ${addTodo ? "addnewTodo" : " "}`}>
				<h1 className="newTodoTitle">Create a new todo</h1>

				<img
					onClick={() => setAddTodo(false)}
					src={"/images/closeSvg.svg"}
					className="closeTodo"
					alt="close"
					name="close"
				/>
				<input
					onChange={handelOnChange}
					type="text"
					name="title"
					className="AddTodoInputs"
					placeholder="Title"
				/>
				<textarea
					onChange={handelOnChange}
					type="text"
					className="AddTodoInputs textArea"
					placeholder="Description"
					name="description"
					rows="3"
				/>

				<input
					onChange={handelOnChange}
					type="date"
					id="date"
					className="AddTodoInputs"
					placeholder="Due Date"
					name="dueDate"
				></input>

				<select
					id="status"
					name="status"
					className="AddTodoInputs"
					value="todo"
					onChange={handelOnChange}
				>
					<option value="todo">Todo</option>
					<option value="progress">In Progress</option>
					<option value="done">Done</option>
				</select>
				<button className="AddTodoButton" onClick={handelOnAdd}>
					Add Todo
				</button>
			</div>
		</div>
	);
}

export default AddTodo;
