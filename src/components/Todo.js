import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeTodo, deletetodo } from "../redux/slices/todoSlice";
import Filters from "./Filters";
function Todo() {
  const [todo, setTodo] = useState("");
  //useSelector is used to select the data from store
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();
  const submitTodo = () => {
    //Whatever Object you pass to action
    //it is received as action.playload in reducer
    dispatch(
      addTodo({
        title: todo
      })
    );
  };

  return (
    <div>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
        placeholder="Todo Text"
      />
      <button onClick={submitTodo}>Add Todo</button>
      <ul>
        {todos.map((currentTodo) => {
          return (
            <li
              style={{
                textDecoration: currentTodo.completed ? "line-through" : "none"
              }}
              key={currentTodo.id}
            >
              {currentTodo.title}
              <button
                onClick={() => {
                  dispatch(
                    completeTodo({
                      id: currentTodo.id
                    })
                  );
                }}
              >
                Complete
              </button>
              <button
                onClick={() => {
                  dispatch(
                    deletetodo({
                      id: currentTodo.id
                    })
                  );
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <Filters />
    </div>
  );
}

export default Todo;
