import React, { useState, useContext } from "react";
import "./NoteContainer.css";
import noteContext from "../../Context/notes/notesContext";

function NoteItem(props) {
	const [editable, setEditable] = useState(true);
	const { el } = props;
	const [todoData, setTodoData] = useState({
		title: "",
		description: "",
		dueDate: "",
		status: "",
	});
	const handelOnChange = (e) => {
		setTodoData({
			...todoData,
			[e.target.name]: e.target.value,
		});
		console.log(todoData);
	};

	const context = useContext(noteContext);
	const { EditNote, DeleteNote } = context;

	return editable ? (
		<div div id={el.id} className={`Indtodos ${props.className}`}>
			<h3 className="h1s">{el.title}</h3>
			<p> {el.description}</p>
			<p>{el.dueDate}</p>
			<div className="DoneAndClose">
				<i
					onClick={() => {
						DeleteNote(el.id, el);
					}}
					className="fas fa-trash-alt"
				></i>
				<i
					onClick={() => {
						setEditable(!editable);
						setTodoData({
							...todoData,
							title: el.title,
							description: el.description,
							dueDate: el.dueDate,
							status: el.status,
						});
						console.log(el.status);
					}}
					className="fas fa-edit"
				></i>
			</div>
		</div>
	) : (
		<div div id={el.id} className={`Indtodos editingMode ${props.className}`}>
			<input
				onChange={handelOnChange}
				name="title"
				type="text"
				className="h1s"
				value={todoData.title}
			/>
			<textarea
				onChange={handelOnChange}
				name="description"
				type="text"
				value={todoData.description}
			/>
			<input
				onChange={handelOnChange}
				name="dueDate"
				type="date"
				value={todoData.dueDate}
			/>

			<div className="DoneAndClose">
				<img
					onClick={() => {
						setEditable(!editable);
					}}
					style={{
						height: "25px",
					}}
					src={"/images/closeSvg.svg"}
				/>
				<i
					onClick={() => {
						EditNote(
							el.id,
							todoData.title,
							todoData.description,
							todoData.dueDate,
							todoData.status
						);
						setEditable(!editable);
					}}
					className="fas fa-check"
				></i>
			</div>
		</div>
	);
}

export default NoteItem;
