import React from 'react';
import ReactDOM from 'react-dom';
import './Attractions.css';

import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Attractions() {
	return(
		<>
			<div className = "page-container">
				<div className = "page-content">
					<div className="page-title">
					Counsil of Elrond
					</div>
					<img src="./images/council-of-elrond.png" alt="" />
					<div className="text">Visit where the meeting of the council of Elrond took place</div>
				</div>
				<div className = "divider" />
				<div className = "page-content">
					<div className="page-title">Narsil</div>
					<img src="./images/narsil.png" alt="" />
					<div className="page-text">Check out Narsil, the very sword that Isildur used to sever the One Ring from Sauron's hand</div>
				</div>
			</div>
		</>
	);
}