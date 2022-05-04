import React  from 'react';
import picture from '../photos/Profile.jpg';
import '../css/About.css';

const About = () => {
    return (
        <div className="about-div">
			<img className="profileImg" src={picture}/>
			<h1 className="name">Ahmad Hamadneh</h1>
			<h3 className="bio">Software | AI Engineer</h3>
            <div className="contact">
                <a href="https://www.linkedin.com/in/hamadneh/">linkedIn</a>
                <a href="https://github.com/amjhamadneh">Github</a>
                <a href="https://leetcode.com/Hamadneh/">LeetCode</a>
            </div>
        </div>
    );
};

export default About;
