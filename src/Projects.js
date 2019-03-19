import React, { Component } from 'react';
import './header.css';
import './global.css';
import './setup.css';
import Nav from './Nav.js';
import projectsData from './projectsdata';


class Projects extends Component {
	render() {
		return (
			<section className="projects">
				{projectsData.map((project, index) => {
					const { name, imgSrc, header, sentence, buttonText } = project
					return (
						<figure className={`${name} figure${index + 1} figure`}>
							<img src={imgSrc} alt="my first game in javascript" />
							<figcaption>
								<h2>{header}</h2>
								<p>{sentence}</p>
								<button>{buttonText}</button>
							</figcaption>
						</figure>
					)
				})}
			</section >
		)
	}
}
export default Projects;