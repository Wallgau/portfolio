import React, { Component } from 'react';
import './header.css';
import './global.css';
import { slide as Menu } from 'react-burger-menu'

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			class: ''
		}
	}

	showSettings(event) {
		event.preventDefault();
		console.log('exercice')
	}

	render() {
		return (

			<div class="wrapper">
				<Menu class="menu">
					<a id="home" className="menu-item" href="/">Home</a>
					<a id="about" className="menu-item" href="/about">About</a>
					<a id="contact" className="menu-item" href="/contact">Contact</a>
				</Menu>
				<i class="fas fa-bars" onClick={this.showSettings}></i>
			</div>
		);
	}
}

export default Nav;