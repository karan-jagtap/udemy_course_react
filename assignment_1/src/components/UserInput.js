import React from "react";

class UserInput extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.props.changeUsername}
          name="username"
          value={this.props.username}
        />
      </div>
    );
  }
}

export default UserInput;
