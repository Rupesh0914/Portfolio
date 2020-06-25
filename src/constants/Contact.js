import React, { Component } from 'react'

export class contact extends Component {
    render() {
        return (
            <div>
               <input type="text" />
                
            </div>
        )
    }
}

export default contact





// import React, { Component } from 'react'

// export class contact extends Component {
//     state ={
//         name: '',
//         isNameValid: true,
//         email: '',
//         isEmailValid: true,
//         message: '',
//     }

//     handleEmail = (e) => {
//         e.preventdefault();
//         this.setState({
//             email: e.target.value
//         }, () => {
//             var re2 = /^\S+@\S+\.\S+$/
//             let isRight = re2.test(this.state.email);
//             if(isRight){ 
//                 this.setState({isEmailValid: true})
//             } else {
//                 this.setState({isEmailValid: false})
//             }
//         })
//     }

//     handleInput = (e) => {
//         e.preventdefault();
//         this.setState({
//             name: e.target.value
//         }, () => {
//             var re = /^([a-zA-Z]{3,30}\s*)$/
//             let isValid = re.test(this.state.name);
//             if(isValid){
//                 this.setState({isNameValid: true})
//             } else {
//                 this.setState({isNameValid: false})
//             }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <p>
//                     <label>Enter your name:</label>
//                     <input 
//                      type="text"
//                      name="name"
//                      value={this.state.name}
//                      onChange={this.handleInput}
//                      />
//                      {this.state.isNameValid ? "" : "Enter your correct name"}
//                 </p>
//                 <p>
//                     <label>Enter your name</label>
//                     <input
//                     type="email"
//                     name="email"
//                     value={this.state.email}
//                     onChange={this.handleEmail}
//                     />
//                     {this.state.isEmailValid ? "" : "Enter your Email again"}

//                 </p>
//                 <p>
//                     <label>Message</label>
//                     <input 
//                     type="message"
//                     name="message"
//                     value={this.state.message}
//                     onChange={this.handleMessage}
//                     />
//                 </p>
                
//             </div>
//         )
//     }
// }

// export default contact
