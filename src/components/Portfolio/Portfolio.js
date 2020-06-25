import React from 'react'
import './Portfolio.css'
import SideNav from '../SideNav/SideNav'
import SectionContainer from '../SectionContainer/SectionContainer'
const Portfolio = ({ handleSectionClick, about, contact, projects, resume, skills, selectedHeading, selectedQuote, selectedSection }) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
            <SideNav 
            handleSectionClick= {handleSectionClick} />
            </div>
            <div className="main-section-container">
            <SectionContainer 
             about = {about}
             skills = {skills}
             projects= {projects}
             resume = {resume}
             contact = {contact}
             selectedHeading={selectedHeading}
             selectedSection={selectedSection}
             selectedQuote={selectedQuote}
             />
            </div>
            
        </div>
    )
}

export default Portfolio
