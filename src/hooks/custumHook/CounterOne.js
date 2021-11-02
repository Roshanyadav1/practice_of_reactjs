import React from "react";
import useCounter from "./useCounter";

function CounterOne() {
 const [count , increament , decreament , reset] = useCounter(0 ,1)

   return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={increament}>Increament </button>
      <button onClick={decreament}>Increament </button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterOne;
