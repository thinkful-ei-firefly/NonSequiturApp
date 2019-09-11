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
    }, 1000); // 1000ms = 2 second
  }
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
