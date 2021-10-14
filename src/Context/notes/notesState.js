import noteContext from "./notesContext";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const NoteState = (props) => {
	//  Todo Toggle
	const [addTodo, setAddTodo] = useState(false);
	const toggleAddTodo = () => {
		setAddTodo(!addTodo);
	};

	// Login Signup
	const [isOpen, setIsOpen] = useState(false);

	// Saving All Notes
	const [notes, setNotes] = useState([
		{
			id: 1,
			title: "Help To Feed Dogs",
			description: "This Sunday Feed Dogs",
			dueDate: "2021-10-17",
			status: "todo",
		},
		{
			id: 2,
			title: "Leet Code Solving",
			description: "Solve Leet Code Everyday",
			dueDate: "2021-12-30",
			status: "todo",
		},
		{
			id: 3,
			title: "Make Maggie",
			description: "For Mid Night Cravings Get Maggie",
			dueDate: "2021-11-20",
			status: "todo",
		},
		{
			id: 5,
			title: "Devsnest Task",
			description: "Internship/Placement Todo Task",
			dueDate: "2021-10-16",
			status: "progress",
		},
		{
			id: 6,
			title: "Devsnest Task Backend",
			description: "Done Just To Push",
			dueDate: "2020-08-20",
			status: "done",
		},
	]);
	// Alerts
	const [message, setMessage] = useState("");

	// In different status
	const [statusTodo, setStatusTodo] = useState([
		{
			id: 1,
			title: "Help To Feed Dogs",
			description: "This Sunday Feed Dogs",
			dueDate: "2021-10-17",
			status: "todo",
		},
		{
			id: 2,
			title: "Leet Code Solving",
			description: "Solve Leet Code Everyday",
			dueDate: "2021-12-30",
			status: "todo",
		},
		{
			id: 3,
			title: "Make Maggie",
			description: "For Mid Night Cravings Get Maggie",
			dueDate: "2021-11-20",
			status: "todo",
		},
	]);
	const [statusProgress, setStatusProgress] = useState([
		{
			id: 5,
			title: "Devsnest Task",
			description: "Internship/Placement Todo Task",
			dueDate: "2021-10-16",
			status: "progress",
		},
	]);
	const [statusDone, setStatusDone] = useState([
		{
			id: 6,
			title: "Devsnest Task Backend",
			description: "Done Just To Push",
			dueDate: "2020-08-20",
			status: "done",
		},
	]);

	// Add Note
	const addNote = (note) => {
		//  Set notes according to status

		if (note.status == "todo") {
			setStatusTodo([...statusTodo, note]);
		} else if (note.status == "progress") {
			setStatusProgress([...statusProgress, note]);
		} else if (note.status == "done") {
			setStatusDone([...statusDone, note]);
		}
		// if no status is selected
		setNotes([...notes, note]);
		console.log(notes);
		setMessage("Note Added Successfully");
		setTimeout(() => {
			setMessage(null);
		}, 3000);
	};
	// Delete Note
	const DeleteNote = (id, note) => {
		// delete note from notes array by the status
		if (note.status == "todo") {
			setStatusTodo(statusTodo.filter((note) => note.id !== id));
		} else if (note.status == "progress") {
			setStatusProgress(statusProgress.filter((note) => note.id !== id));
		} else if (note.status == "done") {
			setStatusDone(statusDone.filter((note) => note.id !== id));
		}
		setNotes(notes.filter((note) => note.id !== id));
		setMessage("Note Deleted");
		setTimeout(() => {
			setMessage(null);
		}, 3000);
	};

	// Edit Note
	const EditNote = (id, title, description, dueDate, status) => {
		// CallApi

		setMessage("Note updated");
		setTimeout(() => {
			setMessage(null);
		}, 3000);
		console.log(id, title, description, dueDate, status);
		// client Side Render
		if (status == "todo") {
			statusTodo.forEach((element) => {
				if (element.id === id) {
					element.title = title;
					element.description = description;
					element.dueDate = dueDate;
					element.status = status;
				}
			});
			setStatusTodo([...statusTodo]);
		}
		if (status == "progress") {
			statusProgress.forEach((element) => {
				if (element.id === id) {
					element.title = title;
					element.description = description;
					element.dueDate = dueDate;
					element.status = status;
				}
			});
			setStatusProgress([...statusDone]);
		}
		if (status == "done") {
			statusDone.forEach((element) => {
				if (element.id === id) {
					element.title = title;
					element.description = description;
					element.dueDate = dueDate;
					element.status = status;
				}
			});
			setStatusDone([...statusDone]);
		}
		notes.forEach((element) => {
			if (element.id === id) {
				element.title = title;
				element.description = description;
				element.dueDate = dueDate;
				element.status = status;
			}
		});
		setNotes([...statusTodo]);
	};
	// const [usersData, setUseData] = useState({
	// 	success: true,
	// 	user: {
	// 		_id: "615869887aaad832dbb27705",
	// 		name: "Login Here",
	// 		email: "Kuncaa1l@gmail.com",
	// 		date: "2021-10-02T14:15:36.102Z",
	// 		__v: 0,
	// 	},
	// });

	// const userData = async () => {
	// 	if (data.success) {
	// 		setUseData(data);
	// 	}
	// 	console.log(usersData);
	// };
	// const logout = async () => {
	// 	localStorage.setItem(
	// 		"token",
	// 		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1YjBiOThhMzE5YjMxMzRiMTM4MDI4In0sImlhdCI6MTYzMzM1NjcyMH0.OrR6d40uXkpcao9yie1qU2tDrPvCmUzV01pCxdaDRrA"
	// 	);
	// };

	return (
		<noteContext.Provider
			value={{
				notes,
				addNote,
				DeleteNote,
				EditNote,
				message,
				setMessage,
				addTodo,
				setAddTodo,
				isOpen,
				setIsOpen,
				statusTodo,
				statusProgress,
				statusDone,
				setStatusTodo,
				setStatusProgress,
				setStatusDone,
				setNotes,
			}}
		>
			{props.children}
		</noteContext.Provider>
	);
};
export default NoteState;
