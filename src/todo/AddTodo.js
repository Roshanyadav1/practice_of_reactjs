import React from "react";
import TodoList from "./TodoList";
import VisibilityFilter from "./VisibilityFilter";

function AddTodo() {
  const [value, setValue] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setValue("");
  };

  const HandleInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onsubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your task"
          onChange={HandleInput}
        />
        <button type="submit" disabled={!value}>
          Submit
        </button>
      </form>
      <TodoList />
      <VisibilityFilter />
    </div>
  );
}

export default AddTodo;
