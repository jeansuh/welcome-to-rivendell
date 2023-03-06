import React from 'react';
import ReactDOM from 'react-dom';
import "./Home.css";

function Home(){
	return(
		<div className = "content">
			<img className="cover" src="./images/Rivendell_-_AUJ.png" alt=""/>
			<img className="cover-active" src="./images/rivendell2.gif" />
			<div className="cover-text">
				<div className="text-small">Take a trip to</div>
				<div className="text-large">The Elven Paradise</div>
			</div>
		</div>
	);
}

function hide(){
	const cover = document.getElementByClassName("cover");
	const coverText = document.getElementByClassName("cover-text");

	coverText.addEventListener("mouseover", function(){
		cover.style.opacity = 0;
	})

	coverText.addEventListener("mouseout", function(){
		cover.style.opacity = 1;
	})

}

export default Home;