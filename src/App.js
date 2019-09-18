import React, { Component } from 'react';
import Splash from './components/Splash/Splash';
import CheckBox from './components/CheckBoxes/Checkbox';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  constructor(){
    super()
    this.state={
      splash: true,
      count: 0,
    }
  }
  increaseCount = () => {
   let newCount = this.state.count
   newCount = newCount + 1
   this.setState({count:newCount})
  }
  componentDidMount() {
    setTimeout(() => {
    this.setState({splash: false});
    }, 2000); // 1000ms = 1 second
  }
 // toggle to ask backend for three items at random and return
 // show how many tasks were completed 
  render(){
    if(this.state.splash) {
      return ( <Splash></Splash>
      );
    }
  
  
  return (
    <Router>
    <main className='App'>
      <label aria-live="polite" className="taskcount">Completed:{this.state.count}</label>
       <p> NonSequitur Application </p>
       <button aria-live="polite" 
                onClick={this.increaseCount} className="submit">Crushed It</button> 
    </main>
    <Route path="/" component={CheckBox} />
    </Router>
    
  );
}
}




export default App;
