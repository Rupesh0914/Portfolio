import React from 'react'

import './AboutMe.css'
import { about } from '../../constants/About'

export const AboutMe = (props) => {
    return (
        <div className="about-container ">
           {about.bio}

        </div>
    )
}

export default AboutMe