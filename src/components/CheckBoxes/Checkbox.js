import React, { Component } from 'react';
import './Checkbox';

class CheckBox extends Component {
  constructor(){
    super()
    this.state={
      q1: '',
      q2: '',
      q3: '',
      q4: ''
    }
  }
  async componentDidMount () {
      this.callBackendAPI()
    }
  
  callBackendAPI = async () => {
    const response = await fetch('/express_backend')
    const body = await response.json()
    this.setState({ q1: body.item1})
    this.setState({ q2: body.item2})
    this.setState({ q3: body.item3})
    this.setState({ q4: body.item4})

    console.log(body.item1)
    if(response.status !== 200) {
      throw Error(body.message)
    } 
    return body
  }

  render() {
    return (
      <div>
        <p><label>Question 1: </label> <input type="checkbox" value={this.state.q1}/>{this.state.q1} </p>
        <p><label>Question 2: </label> <input type="checkbox" value={this.state.q2}/>{this.state.q2} </p>
        <p><label>Question 3: </label> <input type="checkbox" value={this.state.q3}/>{this.state.q3} </p>
        <p><label>Question 4: </label> <input type="checkbox" value={this.state.q4}/>{this.state.q4} </p>
      </div>
      )}
}
    export default CheckBox;