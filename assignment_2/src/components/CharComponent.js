import React from "react";

class CharComponent extends React.Component {
  render() {
    return (
      <p onClick={this.props.removeChar} className="char">
        {this.props.letter}
      </p>
    );
  }
}

export default CharComponent;
