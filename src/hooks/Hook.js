import React, { useState } from "react";

function Hook() {
//  For simple hook
  var initialState = 0;
  const [count, setCount] = useState(initialState);

  const increfive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((e) => e + 1);
    }
  };

  return (
    <div>
      <div>
        Count :{count}
        <button onClick={() => setCount(initialState)}>reset</button>
        <button onClick={() => setCount(count + 1)}>Increament </button>
        <button onClick={() => setCount(count - 1)}>decreament</button>
        <button onClick={increfive}>increament five</button>
      </div>
    </div>
  );
}

export default Hook;
