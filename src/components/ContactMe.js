import React, { Component } from 'react'

class ContactMe extends Component {
  constructor(props){
    super(props)
    this.state = {
      yname: "",
      yemail: "",
      message: "",

    }

  }

  handleChange = (e) => {
    e.preventDefault()
    const{ name, value } = e.target
    this.setState({
      [name]: value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
   console.log("something" , this.state)
  }


  render() {
    return (
      <div className="contact-container">
          <div className="contact-form">
                 <h2>Get in touch with me.</h2>
                    <form onSubmit={this.handleSubmit}className="form-container">   
                        <input
                         name="yname"
                         type="text" 
                         placeholder="Your Name"
                         value={this.state.yname}
                         onChange={this.handleChange}
                         /> 
                        <input
                         type="email" 
                         name="yemail"
                         placeholder="Your Email"
                         onChange={this.handleChange}
                         value={this.state.yemail}
                         />
                        <textarea 
                        placeholder="Explain to me what you want"
                        value={this.state.message}
                        onChange={this.handleChange}
                        name="message"
                        >

                        </textarea>
                         <button type="submit" className="btn">Submit</button>
                   </form>
          </div>
          <div className="my-info">
               <h2>Read little about me.</h2>
               <p>
                    You can view some of my work in github, and posts in twitter and even get know what am upto in IT sector.</p>
                  <p>Your email is highly protected.</p>
                  <h1 className="links">
                     <button className="link">t</button>
                     <button className="link">g</button>
                     <button className="link">In</button>
                  </h1>
          </div>
      </div>
    )
  }
}

export default ContactMe;