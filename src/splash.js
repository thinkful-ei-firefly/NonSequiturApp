import React, { Component } from 'react';
import Logo512 from './logo512.png';

export default class Splash extends Component {
    render() {
        return(
            <div id='Splashwrapper'>
                <img src={Logo512}></img>
            </div>
        );
    }
}