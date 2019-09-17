import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    inputString: ""
  };

  inputChangeHandler = event => {
    this.setState({
      inputString: event.target.value
    });
  };

  deleteLetterHandler = letterIndex => {
    const inputString = this.state.inputString.split("");
    inputString.splice(letterIndex, 1);
    const newString = inputString.join("");
    this.setState({
      inputString: newString
    });
  };

  render() {
    const charList = this.state.inputString.split("").map((letter, index) => {
      return (
        <CharComponent
          letter={letter}
          click={() => this.deleteLetterHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.inputString}
        ></input>
        <p>{this.state.inputString.length}</p>
        <ValidationComponent textLength={this.state.inputString.length} />
        {charList}
      </div>
    );
  }
}

export default App;
