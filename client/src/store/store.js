import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { tasksApi } from "../api/tasksApi";

const store = configureStore({
   reducer: {
      [tasksApi.reducerPath]: tasksApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(tasksApi.middleware),
});

setupListeners(store.dispatch);

export default store;
