import React from "react";
import Counter from "./components/Counter";
import CounterContextProvider from "./CounterContextProvider";
import Example from "./components/Example";
import Navbar from "./components/Navbar";
import PostContrextProvider from "./PostContrextProvider";
import PostList from "./components/PostList";
import Post from "./components/Post";

const App = () => {
  return (
    <div>
      <PostContrextProvider>
        <CounterContextProvider>
          {/* <Counter />
        <Example /> */}
          <Navbar />
          <PostList />
        </CounterContextProvider>
      </PostContrextProvider>
    </div>
  );
};

export default App;
