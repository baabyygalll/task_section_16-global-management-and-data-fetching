import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
          id: 1,
          title: "Mengerjakan Exercise",
          completed: true
        },
        {
          id: 2,
          title: "Mengerjakan Assignment",
          completed: false 
        }
      ]
}

const todoReducer = createSlice({
    name: 'tododata',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: action.payload.completed,
            };
            state.value.push(newTodo);
        },
        delTodo: (state, action) => {
            const id = action.payload;
            state.value = state.value.filter((value) => {
                return value.id !== id;
            });
        }
    }
});

export const { addTodo, delTodo } = todoReducer.actions
export default todoReducer.reducer;
