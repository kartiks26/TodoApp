import React, { useContext } from "react";

function Board(props) {
	const drop = (e) => {
		e.preventDefault();
		const cardId = e.dataTransfer.getData("cardId");
		const card = document.getElementById(cardId);
		card.style.display = "block";
		e.target.appendChild(card);
	};
	const dragOver = (e) => {
		e.preventDefault();
	};

	return (
		<div
			id={props.id}
			onDrop={drop}
			onDragOver={dragOver}
			className={props.className}
		>
			<div className="headings">
				<h1>{props.heading}</h1>
			</div>

			{/* append Child */}
			{props.children}
		</div>
	);
}

export default Board;
