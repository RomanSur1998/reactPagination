import React, { useContext } from "react";
import { counterContext } from "../CounterContextProvider";

const Counter = () => {
  const { increment, counter, decrement, plusten } = useContext(counterContext);
  console.log(counter);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>minus</button>
      <button onClick={increment}>plus</button>
      <button>minus10</button>
      <button onClick={plusten}>plus10</button>
    </div>
  );
};

export default Counter;
