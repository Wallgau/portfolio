import React, { Component } from 'react';
import './header.css';
import './global.css';


class Nav extends Component {
	constructor() {
		super();
		this.state = {
			clicked: false,

		}
	}

	componentDidMount() {
		/* this.handleChange(); */
	}
	togglenav = () => {
		/* 	this.props.onClick(); */
		this.setState({
			clicked: !this.state.clicked,

		})
	}



	render() {
		return (

			<div className="wrapper">
				{this.state.clicked ? <div>
					<i className="fas fa-times" onClick={this.togglenav}></i>
				</div> : <div>
						<i className="fas fa-bars" onClick={this.togglenav}></i>
					</div>}
				<nav className={this.state.clicked ? "menu show" : "menu"}>
					<a id="home" className="menu-item" href="/">Home</a>
					<a id="about" className="menu-item" href="/about">About</a>
					<a id="contact" className="menu-item" href="/contact">Contact</a>
				</nav>


			</div>
		)
	}
}

export default Nav;