import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

export default function Header() {

	return (
		<nav className="l-header navbar navbar-expand-lg navbar-dark bg-primary">
			<NavLink to="/list" activeclassname="active" className="navbar-brand">
				PunkApi
			</NavLink>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/list" activeclassname="active" className="nav-link">
							Listar
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/about" activeclassname="active" className="nav-link">
							Sobre
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
