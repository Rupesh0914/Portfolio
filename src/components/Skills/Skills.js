import React from 'react';

import { skills } from '../../constants/Skills'
import { SkillCard } from './../SkillCard/SkillCard'

import './Skills.css';

export const Skills = ({ props}) => {
    return (
        <div className="skills-container">
         <h1>Industry Knowledge</h1>
         <div className="industry-skill-container">
             {
                 skills.industryKnowledge.map(skill => <SkillCard key={skill} skill={skill} />)
             }
         </div>
         <h3>Tech Skills</h3>
            <div className="industry-skill-container">
                {
                    skills.techSkills.map(skill => <SkillCard skill={skill} />)
                }
            </div>
            <h3>Interpersonal Skills</h3>
            <div className="industry-skill-container">
                {
                    skills.interpersonalSkills.map(skill => <SkillCard skill={skill} />)
                }
            </div>
            
        </div>
    )
            }

export default Skills