import { type } from "@testing-library/user-event/dist/type";
import { getValue } from "@testing-library/user-event/dist/utils";
import React, { createContext, useReducer } from "react";

export const counterContext = createContext();

const INIT_STANE = {
  counter: 0,
  name: "ADIK",
};

function reducer(state = INIT_STANE, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: action.payload };

    case "DECREMENT":
      return { ...state, counter: action.payload };

    case "PLUS_TEN":
      return { ...state, counter: state.counter + 10 };

    case "CHAGE_NAME":
      return { ...state, name: action.payload };

    default:
      return state;
  }
}

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STANE);
  function increment() {
    dispatch({ type: "INCREMENT", payload: state.counter + 1 });
  }
  function decrement() {
    dispatch({ type: "DECREMENT", payload: state.counter - 1 });
  }
  const values = {
    increment,
    counter: state.counter,
    decrement,
    plusten,
    chageName,
    name: state.name,
  };
  return (
    <counterContext.Provider value={values}>{children}</counterContext.Provider>
  );
  function plusten() {
    dispatch({ type: "PLUS_TEN" });
  }
  function chageName(newName) {
    dispatch({ type: "CHAGE_NAME", payload: newName });
  }
};

export default CounterContextProvider;
