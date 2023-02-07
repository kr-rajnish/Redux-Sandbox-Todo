import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: "1",
      title: "Todo 1",
      completed: false
    },
    {
      id: "2",
      title: "Todo 2",
      completed: false
    }
  ],
  reducers: {
    //If addTodo action is dispatched
    //Action receives the additional data
    //action={payload:{

    //}}
    addTodo: (state, action) => {
      console.log("Add Todo Action is", action);
      const todo = {
        id: new Date(),
        title: action.payload.title,
        completed: false
      };
      state.push(todo);
    },
    completeTodo: (state, action) => {
      //Search the todo that needs to be changed
      const matchingTodoIndex = state.findIndex((currentTodo) => {
        return currentTodo.id === action.payload.id;
      });
      if (matchingTodoIndex !== -1) {
        state[matchingTodoIndex].completed = !state[matchingTodoIndex]
          .completed;
      }
    },
    deletetodo: (state, action) => {
      console.log("Action", action);
      state = state.filter((currentTodo) => {
        return currentTodo.id !== action.payload.id;
      });
      return state;
    },
    filterTodo: (state, action) => {
      const filter = action.payload.filter;
      switch (filter) {
        case "all":
          return state;
        case "completed":
          let copiedState = [...state];
          copiedState = copiedState.filter(
            (currentTodo) => currentTodo.completed
          );
          return copiedState;
        case "pending":
          return state.filter((currentTodo) => !currentTodo.completed);
        default:
          return state;
      }
    }
  }
});

export const {
  addTodo,
  completeTodo,
  deletetodo,
  filterTodo
} = todoSlice.actions;

export default todoSlice.reducer;

// addTodo({title:"Hit The Gym"})

//in slice Reducer, the keys of the reducer
//automatically are stored in todoSlice.actions
