import React, { Component } from 'react';
import logo512 from './logo512.png';

export default class Splash extends Component {
    render() {
        return(
            <div id='Splashwrapper'>
                <img src={logo512} alt='reactlogo'></img>
            </div>
        );
    }
}