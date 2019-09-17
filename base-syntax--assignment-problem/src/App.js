import React, { Component } from "react";
import "./App.css";

// Component Imports
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "Jeff"
  };

  userNameChangeHandler = event => {
    this.setState({
      username: [event.target.value]
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.userNameChangeHandler}
          currentName={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
