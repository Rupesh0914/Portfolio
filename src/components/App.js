import React, { Component } from 'react'
import './App.css'
import Portfolio from './Portfolio/Portfolio'
import { about } from './../constants/About'
import { skills } from './../constants/Skills'
import { projects } from './../constants/Projects'
import { resume } from './../constants/Resume'
import { contact } from './../constants/Contact'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selectedSection: "",
       selectedHeading: "",
       selectedQuote: "",
       about: null,
       skills: null,
       projects: null,
       resume: null,
       contact: null,
    }
  }

  componentDidMount () {
    this.setState({
      selectedSection: "about",
      about, skills, projects, resume, contact,
      selectedHeading: about.heading,
      selectedQuote: about.quote
    })
  }

  handleSectionClick = (sectionName) => {
    this.setState({
      selectedSection: sectionName,
      selectedHeading: this.state[sectionName].heading,
			selectedQuote: this.state[sectionName].quote
    })
  }
  
  render() {
    return (
      <div className="App">
       <Portfolio
       about = {this.state.about}
       skills = {this.state.skills}
       projects = {this.state.projects}
       resume = {this.state.resume}
       contact = {this.state.contact}
       selectedHeading={this.state.selectedHeading}
       selectedSection={this.state.selectedSection}
       selectedQuote={this.state.selectedQuote}
       handleSectionClick={this.handleSectionClick} />
        
      </div>
    )
  }
}

export default App
