import React from "react";
import Footer from "./Footer";
function About() {
	return (
		<div className="aboutPage">
			<iframe
				width="853"
				height="480"
				src="https://www.youtube.com/embed/HhavepE3NnE"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			<Footer />
		</div>
	);
}

export default About;
