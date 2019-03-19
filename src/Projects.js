import React, { Component } from 'react';
import './header.css';
import './global.css';
import './setup.css';
import Nav from './Nav.js';
import bubblegame from './images/bubblegame.jpg';
import trigame from './images/trigame1.jpg';
import triviagame from './images/triviagame.jpg';
import babyname from './images/babyname.jpg';
import boxoffice from './images/boxoffice.jpg';
import beachhouse from './images/beachouse.jpg';

class Projects extends Component {
	render() {
		return (
			<section className="projects">
				<figure className="bubblegame figure1 figure">
					<img src={bubblegame} alt="my first game in javascript" />
					<figcaption>
						<h2>Bubble Game</h2>
						<p>Are you fast enough!</p>
						<button>Play</button>
					</figcaption>
				</figure>
				<figure className="figure2 trigame figure">
					<img src={trigame} alt="memory game" />
					<figcaption>
						<h2>TrigoGame</h2>
						<p>Test your memory!</p>
						<button>Play</button>
					</figcaption >
				</figure >
				<figure className="figure3 triviagame figure">
					<img src={triviagame} alt="game about computer and game knowledge" />
					<figcaption>
						<h2>Trivia Game</h2>
						<p>Test your computer & maths knowledge!</p>
						<button>Play</button>
					</figcaption>
				</figure>
				<figure className="figure4 babygame figure">
					<img src={babyname} alt="Get baby Name by gender or check if your name is traditional, original ou timeless" />
					<figcaption>
						<h2>Baby Name</h2>
						<p>Find your Baby Name!</p>
						<button>Test it</button>
					</figcaption>
				</figure>
				<figure className="figure5 boxoffice figure">
					<img src={boxoffice} alt="predict which movies will be in the top10 of the summer" />
					<figcaption>
						<h2>Box Office Boffo</h2>
						<p>Predict the top 10 of this summer!</p>
						<button>Predict</button>
					</figcaption>
				</figure>
				<figure className="figure6 beachhouse figure">
					<img src={beachhouse} alt="" />
					<figcaption>
						<h2>Beach House</h2>
						<p>You are looking for a Beach House</p>
						<button>Beach</button>
					</figcaption>
				</figure>

			</section >
		)
	}
}
export default Projects;