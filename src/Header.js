import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import './font.css';

import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Header() {

	return(
		<>
			<div className="header-container">
				<div className="header-left">
					<img src = {"./evenstar.png"} />
					<h1>Rivendell</h1>
				</div>
				<div className="header-right">
					<Link className = "links-button" to = "/">Home</Link>
					<Link className="links-button" to = "/attractions">Attractions</Link>
					<Link className="links-button" to = "/celebrities">Celebrities</Link>
					<Link className="links-button" to = "/accomodations">Accomodations</Link>
					<Link className="links-button" to = "/directions">Directions</Link>
				</div>
			</div>
		</>
	);
}