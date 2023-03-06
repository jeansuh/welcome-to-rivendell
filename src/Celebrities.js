import React from 'react';
import ReactDOM from 'react-dom';
import './Celebrities.css';

import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Celebrities() {
	return(
		<>
			<div className = "cel-container">
				<div className = "cel-content">
					<div className="cel-title">
						Galadriel
					</div>
					<div className="cel-subtitle">
						Lady of the woods of Lothlórien
					</div>
					<img src="./images/galadriel.png" alt="" />
					<div className="cel-text">One of the greatest elves in Midle-earth</div>
				</div>
				<div className = "divider" />
				<div className = "cel-content">
					<div className="cel-title">Elrond</div>
					<div className="cel-subtitle">
						Lord of Rivendell
					</div>
					<img src="./images/elrond.png" alt="" />
					<div className="cel-text">Elven ruler of Middle-earth</div>
				</div>
			</div>
		</>
	);
}