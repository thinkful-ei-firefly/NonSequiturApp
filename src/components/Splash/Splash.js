import React, { Component } from 'react';
import nonsequitur from './nonsequitur.png';
import './Splash.css';

export default class Splash extends Component {
    render() {
        return(
            <div id='Splashwrapper'>
                <img src={nonsequitur} class="center" width='300' height='300' alt='nonsequiturlogo'></img>
            </div>
        );
    }
}