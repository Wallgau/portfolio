import React, { Component } from 'react';
import './header.css';
import './global.css';
import './setup.css';
import Nav from './Nav.js';
import projectsData from './ProjectsData';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


class Projects extends Component {
	render() {
		return (
			<section className="wrapper project-part" id="project" >
				<h2 className="part-title">Portfolio</h2>
				<div className="projects">
					{projectsData.map((project, index) => {
						const { name, imgSrc, header, sentence, buttonText, description, buttonLink } = project
						return (
							<div className="one-project" data-aos="fade-up" data-aos-offset="200"
								data-aos-delay="50">
								<h2 className="name">{name}</h2>
								<div className={`full-screenProject projet${index + 1} `}>
									<figure className={`${name} figure${index + 1} figure`}>
										<img src={imgSrc} alt="my first game in javascript" />
										<figcaption className="figcaption">
											<h2>{header}</h2>
											<p>{sentence}</p>
											<a href={buttonLink}><button>{buttonText}</button></a>
										</figcaption>
									</figure>
									<div className={`description more description${index + 1}`}>
										<p>{description}</p>
										<a href={buttonLink}><button>{buttonText}</button></a>
									</div>
								</div>
							</div>
						)
					})}
				</div >
			</section>
		)
	}
}
export default Projects;