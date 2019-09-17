import React, { Component } from 'react';
import './Checkbox';

class CheckBox extends Component {
  render() {
    return (
    <div>
      <div className="CheckBoxes">
        <div className="checkedbox">
          <input type="checkbox" value="All" id="checkedbox" name="checkbox"/>
          Sing the national anthem over your least favorite politician's debate reel. 
        </div>
      </div>
      <div className="CheckBoxes">
        <div className="checkedbox2">
            <input type="checkbox" value="All" id="checkedbox2" name="checkbox"/>
            Run backwards while yodelling, because Beyonce swears by it. 
        </div>
      </div>
      <div className="CheckBoxes">
        <div className="checkedbox3">
          <input type="checkbox" value="All" id="checkedbox3" name="checkbox"/>
          Drink a shot of pickle juice. This is helpful for cleaning your tongue.
        </div>
      </div>
    </div>
      )}
  }
    export default CheckBox;