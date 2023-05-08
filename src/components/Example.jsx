import React, { useContext, useState } from "react";
import { counterContext } from "../CounterContextProvider";

const Example = () => {
  const { chageName, name } = useContext(counterContext);
  const [input, setValue] = useState("");

  return (
    <div>
      <h1>Hello {name}</h1>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          chageName(input);
        }}
      >
        new name
      </button>
    </div>
  );
};

export default Example;
