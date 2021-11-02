import React, { useReducer } from "react";
import ComponentA from "./hooks/globalReducer/ComponentA";
import ComponentB from "./hooks/globalReducer/ComponentB";
import ComponentC from "./hooks/globalReducer/ComponentC";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;

    case "decreament":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ countState : count , countDispatch : dispatch }}>
      <div>
        Count => {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
