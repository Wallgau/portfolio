import React, { Component } from 'react';
import './header.css';
import './global.css';
import Nav from './Nav.js';
import bublegame from './images/bubblegame.svg';
import eiffeltower from './images/eiffel-tower2.jpg';
import trigame from './images/trigame1.jpg';
import triviagame from './images/triviagame.svg';
import babyname from './images/babyname.svg';
import boxoffice from './images/boxoofice.svg';
import beachhouse from './images/beachhouse.svg';

class Projects extends Component {
	render() {
		return (
			<section className="projects">
				<figure className="buble-game figure1">
					<img src={bublegame} alt="my first game in javascript" />
					<figcaption>
						<h2>Bubble Game</h2>
						<p>Are you fast enough!</p>
						<button>Play</button>
					</figcaption>
				</figure>
				<figure className="figure2 trigame">
					<img src={trigame} alt="memory game" />
					<figcaption>
						<h2>TrigoGame</h2>
						<p>Test your memory!</p>
						<button>Play</button>
					</figcaption >
				</figure >
				<figure className="figure3 triviagame">
					<img src={triviagame} alt="game about computer and game knowledge" />
					<figcaption>
						<h2>Trivia Game</h2>
						<p>Test your computer & maths knowledge!</p>
						<button>Play</button>
					</figcaption>
				</figure>
				<figure className="figure4">
					<img src={babyname} alt="Get baby Name by gender or check if your name is traditional, original ou timeless" />
					<figcaption>
						<h2>Baby Name</h2>
						<p>Find your Baby Name!</p>
						<button>Test it</button>
					</figcaption>
				</figure>
				<figure className="figure5 boxoffice">
					<img src={boxoffice} alt="predict which movies will be in the top10 of the summer" />
					<figcaption>
						<h2>Box Office Boffo</h2>
						<p>Predict the top 10 of this summer!</p>
						<button>Predict</button>
					</figcaption>
				</figure>
				<figure className="figure6 beachhouse">
					<img src={beachhouse} alt="" />
					<figcaption>
						<h2></h2>
						<p></p>
						<button></button>
					</figcaption>
				</figure>
				<figure className="eiffel-tower figure7">
					<img src={eiffeltower} alt="eiffel tower seen by bottom" />
				</figure>
			</section >
		)
	}
}
export default Projects;