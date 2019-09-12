import React, { Component } from 'react';

export default class Task extends Component {
    constructor() {
        super();
        this.state = {
            task:'',
            count: 0
        };
        this.clickHandle = this.clickHandle.bind(this)
    }
}