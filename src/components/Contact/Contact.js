
import React, { Component } from 'react'
import './Contact.css'

export class contact extends Component {
    state ={
        name: '',
        isNameValid: true,
        email: '',
        isEmailValid: true,
        message: '',
    }




    handleClick = () => {

    }
    handleEmail = (e) => {
        
        this.setState({
            email: e.target.value
        }, () => {
            var re2 = /^\S+@\S+\.\S+$/
            let isRight = re2.test(this.state.email);
            if(isRight){ 
                this.setState({isEmailValid: true})
            } else {
                this.setState({isEmailValid: false})
            }
        })
    }

    handleInput = (e) => {
        
        this.setState({
            name: e.target.value
        }, () => {
            var re = /^([a-zA-Z\s]{3,30}\s*)$/
            let isValid = re.test(this.state.name);
            if(isValid){
                this.setState({isNameValid: true})
            } else {
                this.setState({isNameValid: false})
            }
        })
    }
    render() {
        return (
            <div className="form">
                <h3>Contact Form</h3>
                <p>
                    <label>Enter your Name:</label>
                    <input 
                    className="input"
                     type="text"
                     name="name"
                     value={this.state.name}
                     onChange={this.handleInput}
                     />
                     {this.state.isNameValid ? "" : "Enter your correct name"}
                </p>
                <p>
                    <label>Enter your Email:</label>
                    <input
                    className="input"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                    />
                    {this.state.isEmailValid ? "" : "Enter your Correct Email again"}

                </p>
                <p>
                    <label>Message</label>
                    <textarea style={{height:'100px'}} className="input">Message</textarea>
                </p>
                <p>
                    <button className="button" onCLick={this.handleClick}>SEND A MESSAGE</button>
                </p>

                {/* <h3>Contact Info</h3>
                <p>Email: rupesh.malhotra2@outlook.com</p>  */}
            </div>
        )
    }
}

export default contact

