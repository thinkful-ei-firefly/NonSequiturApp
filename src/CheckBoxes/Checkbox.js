import React, { Component } from 'react';
import '../CheckBoxes/Checkbox';

class CheckBox extends Component {
  render() {
    return (
    <div>
      <div className="CheckBoxes">
        <div className="checkedbox">
          <input type="checkbox" value="All" id="checkedbox" name="checkbox"/><form>

          </form>
          CheckBoxes
        </div>
      </div>
      <div className="CheckBoxes">
        <div className="checkedbox2">
            <input type="checkbox" value="All" id="checkedbox2" name="checkbox"/>
            CheckBoxes 2
        </div>
      </div>
      <div className="CheckBoxes">
        <div className="checkedbox3">
          <input type="checkbox" value="All" id="checkedbox3" name="checkbox"/>
          CheckBoxes 3
        </div>
      </div>
    </div>
      )}
  }
    export default CheckBox;