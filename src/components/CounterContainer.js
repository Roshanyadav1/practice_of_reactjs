import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNum, delNum } from "../redux/count/CountAction";

function CounterContainer() {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addNum())}>Increament</button>
      {count}
      <button onClick={() => dispatch(delNum())}>Decreament</button>
    </div>
  );
}

export default CounterContainer
