import React, { Component } from 'react';
import './header.css';
import './global.css';
import { slide as Menu } from 'react-burger-menu'

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			clicked: false
		}
	}


	handleChange = () => {
		this.setState({
			clicked: true
		})
	}

	hideButton() {
		if (this.state.clicked === true) {
			return (<div onClick={() => this.handleChange}>
				<i className="fas fa-times"></i>
			</ div>
			)
		} else if (this.state.clicked === false) {
			return (
				<div>
					<i className="fas fa-bars"></i>
				</div>
			)
		}
	}


	render() {
		return (

			<div className="wrapper">
				<Menu className="menu">
					<a id="home" className="menu-item" href="/">Home</a>
					<a id="about" className="menu-item" href="/about">About</a>
					<a id="contact" className="menu-item" href="/contact">Contact</a>
				</Menu>
			</div>
		)
	}
}

export default Nav;