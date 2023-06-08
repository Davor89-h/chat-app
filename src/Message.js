import React, { Component }  from "react";

class Messages extends Component {

  randomId() {
    var min = 1;
    var max = 100000;
    var random = min + Math.random() * (max - min);
    return random;
  }


  renderMessage(message) {
    const { member, text } = message;
    const index = this.randomId();
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    return (
      <li key={index} className={className}>
        <div
          className="avatar" style={{ backgroundColor: member.clientData.color }}>
        </div>
        <div className="message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  render() {
    const { messages } = this.props;

    // console.log("message rendered")

    return (
      <ul className="Messages-list">
        {messages.map((m) => this.renderMessage(m))}
      </ul>
    )
  }
}

export default Messages;