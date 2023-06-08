import React, { Component } from "react";
import Messages from "./Messages";
import Input from "./Input";
import "./App.css";

function randomName() {
  const adjectives = ["Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoey", "Nora", "Lily", "Eleanor", "Hannah", "Lillian", "Addison", "Aubrey", "Ellie", "Stella", "Natalie", "Zoe", "Leah", "Hazel", "Violet", "Aurora"];
  const nouns = ["Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Hall"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + "_" + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      member: {
        username: randomName(),
        color: randomColor(),
      },
    };
  }

  componentDidMount() {
    // this.drone = new window.Scaledrone(process.env.REACT_APP_DRONE_ID_KEY, {
    this.drone = new window.Scaledrone("XHZrsSMiMyWJYHJB", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      else {
        const member = { ...this.state.member };
        member.id = this.drone.clientId;
        this.setState({ member });
      }
    });

    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const message = { member, text: data };
      this.setState(prevState => ({
        messages: [...prevState.messages, message],
      }));
    });
  }

  sendMessage = (message) => {
    const messages = this.state.messages
    this.setState({ messages: messages })
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chat app</h1>
        </header>
        <Messages messages={this.state.messages} currentMember={this.state.member} />
        <Input sendMessage={this.sendMessage} />
      </div>
    )
  }
}

export default App;
