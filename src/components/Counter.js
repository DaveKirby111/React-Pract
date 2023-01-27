import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };

        // this.increment = this.increment.bind(this);
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        return (
        <div>
            <p>Count value is: {this.state.counter} </p>
            <button onClick={this.increment}>
                Click to add 1 to counter.
                </button>
        </div>);
    }
}

export default Counter;