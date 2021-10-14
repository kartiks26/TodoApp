import React from "react";
function Footer() {
	return (
		<div className="Footer">
			<div className="div2">
				<p
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
					}}
				>
					Kartik Shikhare
				</p>
			</div>
			<div className="div1 ">
				<a href="http://www.instagram.com/pratikartik" target="_blank">
					<i
						style={{
							color: "black",
							fontSize: "3rem",
							marginLeft: "1rem",
						}}
						className="fab fa-instagram"
					></i>
				</a>
				<a
					href="https://www.linkedin.com/in/kartik-shikhare-7145b11b4/"
					target="_blank"
				>
					<i
						style={{
							color: "black",
							fontSize: "3rem",
							marginLeft: "1rem",
						}}
						className="fab fa-linkedin-in"
					></i>
				</a>
				<a href="https://www.facebook.com/pratikshikhare26/" target="_blank">
					<i
						style={{
							color: "black",
							fontSize: "2.5rem",
							marginLeft: "1rem",
						}}
						className="fab fa-facebook-f"
					></i>
				</a>
				<a href="https://www.github.com/kartiks26/" target="_blank">
					<i
						style={{
							color: "black",
							fontSize: "2.5rem",
							marginLeft: "1rem",
						}}
						className="fab fa-github"
					></i>
				</a>
				<a
					href="https://drive.google.com/file/d/12brC2r3yY-6TuwnpGel2p4nTPbcrYZTY/view?usp=sharing"
					target="_blank"
				>
					<img
						style={{
							height: "3rem",
							width: "3rem",
							marginLeft: "1rem",
						}}
						src={"/images/resume.svg"}
					></img>
				</a>
			</div>
		</div>
	);
}
{
	// <i class="fa-solid fa-file"></i>;
	/* <i class="fa-solid fa-file-lines"></i>; */
	// <i class="fa-solid fa-file-user"></i>;
	// <i class="fa-solid fa-user-tie"></i>;
}
export default Footer;
