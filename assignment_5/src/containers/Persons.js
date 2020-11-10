import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

import { connect } from "react-redux";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.personAddedHandler} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.personDeletedHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    personAddedHandler: () => {
      console.log("clicked");
      return dispatch({ type: "ADD_PERSON" });
    },
    personDeletedHandler: (id) => dispatch({ type: "DELETE_PERSON", id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
