import { Component } from "react";

class ClassEvent extends Component {

    handleClick() {
        console.log("Class based event.");
    }
    
    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Class Event click</button>
            </div>
        )
    }
}

export default ClassEvent;