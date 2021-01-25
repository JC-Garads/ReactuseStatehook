import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(2);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function multiply() {
    setNum(num * 2);
  }

  function divide() {
    setNum(num / 2);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <h1>{num}</h1>
      <button onClick={multiply}>x</button>
      <button onClick={divide}>/</button>
    </div>
  );
}
export default App;
