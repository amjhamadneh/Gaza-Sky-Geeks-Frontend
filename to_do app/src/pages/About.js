import React  from 'react';
import picture from '../photos/Ahmad.jpg';
const About = () => {
    return (
        <div style={{'textAlign':'center'}}>
        	<h1>AHMAD HAMADNEH</h1>
        	<img src={picture} alt="ahmad" style={{'width':'700px','height':'500px'}}/>
			<div style={{'textAlign':'left'}}>
				<h3>Skills</h3>
				<ul style={{'listStyleType':'none'}}>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>React</li>
				</ul>
			</div>
        </div>
    );
};

export default About;
