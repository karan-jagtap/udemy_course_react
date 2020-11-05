import React from "react";
import "./App.css";
import CharComponent from "./components/CharComponent";
import ValidationComponent from "./components/ValidationComponent";

class App extends React.Component {
  state = {
    data: "",
    data_len: 0,
  };

  calcLength = (e) => {
    this.setState({
      data_len: e.target.value.length,
      data: e.target.value,
    });
  };

  removeChar = (e, i) => {
    const data = this.state.data.split("");
    data.splice(i, 1);
    this.setState({
      data: data.join(""),
      data_len: this.state.data_len - 1,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="content"
          onChange={this.calcLength}
          value={this.state.data}
        />
        <hr />
        <p>Length : {this.state.data_len}</p>
        <hr />
        <ValidationComponent data_len={this.state.data_len} />
        <hr />
        {this.state.data.split("").map((e, i) => {
          return (
            <CharComponent
              letter={e}
              key={i}
              removeChar={(e) => this.removeChar(e, i)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
