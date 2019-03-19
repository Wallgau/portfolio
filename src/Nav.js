
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

	togglenav = () => {
		this.setState({
			clicked: !this.state.clicked,
		})
	}

	render() {
		const navItems = [
			{
				id: 'home',
				link: '/',
				text: 'Home',
			},
			{
				id: 'about',
				link: '/about',
				text: 'About',
			},
			{
				id: 'projects',
				link: '/projects',
				text: 'Projects',
			},
			{
				id: 'contact',
				link: '/contact',
				text: 'Contact',
			},
		];

		const iconName = this.state.clicked ? 'fas fa-times' : 'fas fa-bars';
		const navClass = this.state.clicked ? 'menu show' : 'menu';

		return (
			<div className="wrapper">
				<div>
					<i className={iconName} onClick={this.togglenav}></i>
				</div>
				<nav className={navClass}>
					{navItems.map(({ id, link, text }) => (
						<a id={id} className="menu-item" href={link}>{text}</a>
					))}
				</nav>
			</div>
		)
	}
}

export default Nav;




