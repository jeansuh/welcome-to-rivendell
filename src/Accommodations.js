import React from 'react';
import ReactDOM from 'react-dom';
import './Accommodations.css';

import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Accommodations() {
	return(
		<>
			<div className = "acc-container">
				<div className = "acc-content">
					<div className="acc-title">
						Lembas
					</div>
					<img src="./images/lembas.jpg" alt="" />
					<div className="acc-text">Taste the special elven bread, very sweet and extremely nutritious.</div>
				</div>
				<div className = "divider" />
				<div className = "acc-content">
					<div className="acc-title">Lodging</div>
					<img src="./images/bed.png" alt="" />
					<div className="acc-text">Sleep on the very bed that Frodo Baggins slept in!</div>
				</div>
			</div>
		</>
	);
}