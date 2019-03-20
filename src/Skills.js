import React, { Component } from 'react';
import './global.css';
import SkillsData from './SkillsData.js';

class Skills extends Component {
	render() {
		return (
			<section className=" skills" id="skills" >
				<h2 className="part-title">Skills</h2>

				<div className="wrapper flexskills">
					{SkillsData.map((skill, index) => {
						const { title, icon } = skill
						return (
							<div className="skills">
								<div className="skill">
									<div className={`name${index + 1}`}>
										<p>{title}</p>
										<i className={icon}></i>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</section>
		)
	}
}
export default Skills;