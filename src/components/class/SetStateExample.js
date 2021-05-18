import React, { Component } from 'react'

class SetStateExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0
        }
        this.incrementAge = this.incrementAge.bind(this)
    }

    incrementAge() {
        setTimeout(() => {
            this.setState((state, props) => {
                console.log(state, props)
                return {
                    age: this.state.age + 1
                };
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <label>My age is: {this.state.age}</label>
                <br />
                <button onClick={this.incrementAge}>Grow me older !!</button>
            </div>
        );
    }
}

export default SetStateExample
