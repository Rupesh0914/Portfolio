import React from 'react';
import rupesh from '../../rupesh.jpg'

import './SideNav.css';

const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src={rupesh}
                className="avatar"
                alt="avatar"/>
            <h2 className="main-name">Rupesh Malhotra</h2>
            <p className="subtitle">"A Coder Who Codes"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                <p className="section-list-element" onClick={() => handleSectionClick("resume")}>Resume</p>
               
            </div>
            <div className="wrapper">
               <div class="media">
                   <ul>
                       <li><a href="http://linkedin.com/in/rupesh-malhotra"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                       <li><a href="https://github.com/Rupesh0914"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                       <li><a href="https://www.facebook.com/rupesh.malhotra.545/"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                       <li><a href="https://twitter.com/Rupeshm17829744"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                   </ul>
               </div>
            </div>
        </div>
    );
}



export default SideNav

