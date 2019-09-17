//add a Form here for getting emails of tasks directly
import react, { Component } from 'react';

class SubmissionForm extends Compnent {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert('Not a valid entry' + this.input.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={(input) => this.input = input} />
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}