import React, { Component } from "react";


class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }


  onSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim() === "") {
      alert("Please write a message.");
    }
    else {
      this.props.sendMessage(this.state.text)
    };
    this.setState({ text: "" });
  }
  render() {
    return (

      <form className="form" onSubmit={(e) => this.onSubmit(e)}>
        <input className="input" onChange={(e) => this.onChange(e)}
          value={this.state.text}
          type="text"
          autoFocus={true}
          placeholder="Start typing your message..."
        />
        <button className="button">Send message</button>
      </form>

    )
  }
}


export default Input;