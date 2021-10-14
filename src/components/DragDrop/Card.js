import React from "react";
import "./dragdrop.css";

function Card(props) {
	const dragStart = (e) => {
		const target = e.target;
		e.dataTransfer.setData("cardId", target.id);
		setTimeout(() => {
			target.style.display = "none";
		}, 0);
	};
	const dragOver = (e) => {
		e.preventDefault();
	};
	return (
		<div
			id={props.id}
			onDragStart={dragStart}
			onDragOver={dragOver}
			draggable={props.draggable}
			className={props.className}
		>
			{props.children}
		</div>
	);
}

export default Card;
