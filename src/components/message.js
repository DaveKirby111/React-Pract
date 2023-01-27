import {Component} from "react";

class Message extends Component {
    render() {
        return <p>Message: {this.props.content}</p>;
    }
}

export default Message;