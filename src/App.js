import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { StickyTable } from "./table_component/StickyTable";

function App() {
  return (
    <Provider store={store}>
      <StickyTable />
    </Provider>
  );
}

export default App;
