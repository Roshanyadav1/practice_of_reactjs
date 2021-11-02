import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false, 
        post: {},
        error: "Something went wrong",
      };

    default:
      return state;
  }
};

function DataFetchTwo() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error && <div>{state.error}</div>}
    </div>
  );
}

export default DataFetchTwo;
