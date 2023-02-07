import React from "react";
import { useDispatch } from "react-redux";
import { filterTodo } from "../redux/slices/todoSlice";

function Filters() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(
            filterTodo({
              filter: "all"
            })
          );
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          dispatch(
            filterTodo({
              filter: "completed"
            })
          );
        }}
      >
        Completed
      </button>
      <button
        onClick={() => {
          dispatch(
            filterTodo({
              filter: "pending"
            })
          );
        }}
      >
        Pending
      </button>
    </>
  );
}

export default Filters;
