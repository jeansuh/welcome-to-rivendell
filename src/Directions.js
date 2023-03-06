import React from 'react';
import ReactDOM from 'react-dom';
import './Directions.css';

import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Directions() {
	return(
		<>
			<div className = "dir-container">
				<div className = "dir-content">
					<div className="dir-title">
					</div>
					<img src="./images/map.jpg" alt="" />
				</div>
			</div>
		</>
	);
}