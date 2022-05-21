import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./Todo";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
