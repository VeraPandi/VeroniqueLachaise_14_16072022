import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/slices";

const store = configureStore({
   reducer: {
      employees: employeesReducer,
   },
});

export default store;
