import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<section className="eiffel-tower wrapper">
				<h2 className="part-title" id="contact">Contact</h2>
				<div className="formContact">
					<form action="mailto:maslah.olfa@gmail.com" class="contactForm">
						<div class="topForm">
							<label for="name" class="visuallyhidden">Name</label>
							<input type="text" name="name" id="name" placeholder="Name"></input>
							<label for="email" class="visuallyhidden">Name</label>
							<input type="email" name="email" id="email" placeholder="Email address"></input>
							<label for="comment" class="visuallyhidden">Comment</label>
							<input type="text" name="comment" placeholder="Comment" id="comment"></input>
							<label for="submitButton" class="visuallyhidden submit">Post Comment</label>
							<input type="submit" id="submitButton" name="submit" value="send"></input>
						</div>
					</form>
				</div>
			</section>
		)
	}
}
export default Form;