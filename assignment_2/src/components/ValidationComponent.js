import React from "react";

class ValidationComponent extends React.Component {
  render() {
    const output =
      this.props.data_len <= 5 ? (
        <p>Length too short...</p>
      ) : (
        <p>Text Long enough...</p>
      );
    return <div>{output}</div>;
  }
}

export default ValidationComponent;
