import React from 'react'
import './SectionContainer.css'
import AboutMe from './../AboutMe/AboutMe'
import Skills from './../Skills/Skills'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'

const SectionContainer = ({ about, projects, resume, skills, selectedHeading, selectedQuote, selectedSection }) => {
    return (
        <div className="section-container">
        <div className="section-heading-container">
            <h1 className="main-heading">{selectedHeading}</h1>
            <p className="main-quote">{selectedQuote}</p>
        </div>
        <div className="section-component">
        {
           {
            about: <AboutMe bio={about} />,
            skills: <Skills skills={skills} />,
            projects: <Projects projects={projects} />,
            resume: <Resume resume={resume} />

           }[selectedSection]
        }
        </div>
        
    </div>

    )
}

export default SectionContainer
