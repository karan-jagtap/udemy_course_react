import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    username: "kmessilj",
  };
  changeUsername = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="file-css">
        <UserInput
          username={this.state.username}
          changeUsername={this.changeUsername}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
