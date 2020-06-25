import React from 'react'
import './resume.css'

import { resume } from '../../constants/Resume'

const Resume = (props) => {
    return (
        <div className="resume-container">
            {resume.bio}<br /><br />
            {resume.skills}<br /><br />
            {resume.experience}<br /><br />
            {resume.experience2}<br /><br />
            {resume.experience3}<br /><br />
            {resume.education}<br /><br />
            {resume.activity}<br /> <br />

            
        </div>
    )
}

export default Resume
