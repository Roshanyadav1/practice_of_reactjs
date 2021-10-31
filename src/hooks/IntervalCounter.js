import React, { useEffect, useState } from "react";

function IntervalCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
      console.log("Interval");
      setCount(preCount => preCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick(), 1000)
    return () =>{
        console.log("Ended");
        clearInterval(interval)
    }
  },[]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default IntervalCounter;
