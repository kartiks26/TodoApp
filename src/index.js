import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NoteState from "./Context/notes/notesState";
ReactDOM.render(
	<React.StrictMode>
		<NoteState>
			<App />
		</NoteState>
	</React.StrictMode>,
	document.getElementById("root")
);

// import noteContext from "../context/notes/notesContext";
// import { useContext } from "react";
