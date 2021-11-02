import React from "react";
import useCounter from "./useCounter";

function CounterTwo() {
  const [count, increament, decreament, reset] = useCounter(10 , 10)
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={increament}>Increament </button>
      <button onClick={decreament}>Increament </button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterTwo;
