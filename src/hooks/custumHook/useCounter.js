import { useState } from "react";

function useCounter(initialCount = 0 , value) {
  const [count, setCount] = useState(initialCount);

  const increament = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decreament = () => {
    setCount((prevCount) => prevCount - value);
  };

  const reset = () => {
    setCount(initialCount);
  };
  return [count , increament , decreament , reset]
}

export default useCounter;
