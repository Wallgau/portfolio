import React, { Component } from 'react';
import './global.css';
import './setup.css';

class About extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className="about">
				<div className="wrapper">
					<h2>About me</h2>
					<p>I am a junior Web Developper who have a particular love for JS and React, it's the reason why I build this website with React.js. If you ask me where I see myself in 5 years, I will answer as full stack Web Developper, always on page with new Tech. I am also interested by AI and dataScience so being very confident with python, php and C will be a dream comes true for me.</p>
				</div>
			</section>
		)
	}
}
export default About;