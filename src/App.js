import React, { Component } from "react";
import Messages from "./Messages";
import Input from "./Input";
import "./App.css";

function randomName() {
  const firstNames = ["Stjepan", "Josip", "Antun", "Marko", "Ana", "Antonio", "Marija", "Jakov", "Simon", "Simona", "Ljudevit", "Krešimir", "Tihomir", "Luka", "Lura", "Lorena", "Elizabeta", "Natalija", "Mirela", "Agata", "Jasmina", "Jasmin", "Petar"];
  const lastNames = ["Marić", "Anić", "Horvat", "Posavec", "Hladin", "Malok", "Gazdić", "Kramar", "Farc", "Leljak", "Pintarić", "Nuli", "Novak", "Vincek", "Korpar", "Bencek", "Banec", "Rožman", "Glavica", "Međeral", "Gregur", "Gregurec", "Gerić"];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return firstName + "_" + lastName;
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
    this.drone = new window.Scaledrone(process.env.REACT_APP_DRONE_ID_KEY, {
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
