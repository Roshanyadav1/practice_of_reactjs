import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
// import { MDBInput } from "mdb-react-ui-kit";
// import styles from "./table.css";

function GlobalFilter({ filter, setFilter }) {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <div
      style={{
        padding: "10px",
        width: "170px",
        marginTop: "10px",
      }}
    >
      <input
        label="Search"
        id="form1"
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default GlobalFilter;
