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
            console.log(state.value)
        },
        handleComplete: (state, action) => {
            
            state.value = state.value.map((value)=>{
                if(value.id === action.payload){
                    value.completed = !value.completed;
                }
                return value;
            })

            console.log(state.value)
        }

    }
});

export const { addTodo, delTodo, handleComplete } = todoReducer.actions
export default todoReducer.reducer;
