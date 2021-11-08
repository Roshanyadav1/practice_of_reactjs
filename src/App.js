import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import FilterTable from "./table_component/FilteringTable";
function App() {
  return (
    <Provider store={store}>
      <FilterTable />
    </Provider>
  );
}

export default App;
