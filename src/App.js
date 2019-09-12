import React, { Component } from 'react';
import Splash from './Splash';
import CheckBox from './CheckBoxes/Checkbox';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  constructor(){
    super()
    this.state={
      splash: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({splash: false});
    }, 2000); // 1000ms = 1 second
  }
 // toggle to ask backend for three items at random and return
 // submit to send to next page
 // show how many tasks were completed 
  render(){
    if(this.state.splash) {
      return ( <Splash></Splash>
      );
    }
  
  
  return (
    <Router>
    <main className='App'>
       <p> NonSequitur Application </p>
       {/* <CheckBox></CheckBox>
       <Splash></Splash> */}
    </main>
     <Route path="/" component={CheckBox} />
    </Router>
    
  );
}
}


export default App;
