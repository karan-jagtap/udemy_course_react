const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD_5":
      return {
        ...state,
        counter: state.counter + 5,
      };
    case "DELETE_5":
      return {
        ...state,
        counter: state.counter - 5,
      };
    default:
      return state;
  }
};

export default rootReducer;
