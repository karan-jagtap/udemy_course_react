const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      console.log("inside ADD_PERSON");
      const newPerson = {
        id: Math.random(),
        name: "Max",
        age: Math.floor(Math.random() * 40),
      };
      return {
        ...state,
        persons: [...state.persons, newPerson],
      };
    case "DELETE_PERSON":
      return {
        ...state,
        persons: state.persons.filter((person) => person.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
