import React, { Component } from 'react';
import './header.css';
import './global.css';
import Nav from './Nav.js';


class Header extends Component {
	render() {
		return (
			<header>
				<Nav />

				<h1>Olfa MASLAH</h1>
				<p className="dev">Web Developper</p>
				<div className="personal-image"></div>
				{/* <p className="intro">Hi, I'am Olfa. I am french from Paris. I am exciting to show you my portfolio! </p> */}
			</header>
		)
	}
}
export default Header;