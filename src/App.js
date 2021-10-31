// import ComponentC from "./hooks/useContext/ComponentC";

import React from "react";
import CounterThree from "./hooks/useReducer/CounterThree";
// import CounterTwo from "./hooks/useReducer/CounterTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div>
      {/* <UserContext.Provider value={"Roshan"}>
        <ChannelContext.Provider value={"coder"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterTwo /> */}
      <CounterThree />
    </div>
  );
}

export default App;
