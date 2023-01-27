import { Component } from "react";

class Form extends Component {

    state = {
        name: "",
        book: "",
    };

    nameInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    bookInput = (event) => {
        this.setState({
            book: event.target.value,
        });
    };

    submitForm = (event) => {
        event.preventDefault();//prevents page refresh on form submission.
        console.log({
            fname: this.state.name,
            fbook: this.state.book
        });
    };

    render() {
        return(
            <div>
                <form onSubmit={this.submitForm}>
                    <label>Name:</label>
                    <input 
                    onChange={this.nameInput}
                    type="text" 
                    value={this.state.name}></input>

                    <br></br>

                    <label>Book:</label>
                    <input
                    type="text"
                    value={this.state.book}
                    onChange={this.bookInput}></input>

                    <br></br>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;