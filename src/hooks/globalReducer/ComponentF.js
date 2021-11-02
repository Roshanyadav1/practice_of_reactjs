import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentF =>{countContext.countState}
      <button onClick={() => countContext.countDispatch("increament")}>
        Increament
      </button>
      <button onClick={() => countContext.countDispatch("decreament")}>
        Decreament
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentF;
