import { configureStore } from "@reduxjs/toolkit";
import JobDetailReducer from "./Jobs/JobDetailsSlice";

const store = configureStore({
    reducer: {
        jobDetails : JobDetailReducer,
        // counter: counterReducer, 
    },
});

export default store;
