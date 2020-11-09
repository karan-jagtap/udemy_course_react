import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.handleIncrement}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.handleDecrement}
        />
        <CounterControl label="Add 5" clicked={this.props.handleAdd5} />
        <CounterControl label="Subtract 5" clicked={this.props.handleDelete5} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch({ type: "INCREMENT" }),
    handleDecrement: () => dispatch({ type: "DECREMENT" }),
    handleAdd5: () => dispatch({ type: "ADD_5" }),
    handleDelete5: () => dispatch({ type: "DELETE_5" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
