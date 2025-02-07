import { createSlice } from "@reduxjs/toolkit";

export const JobSlice = createSlice({
    name:"job",
    initialState:{
        job:[]
    },
    reducers:{
        replaceJobArray : (state, action) => {
            state.job = action.payload;
        },
        addMoreJobsToArray:(state,action) => {
            const prevJobs = [...state.job];
            state.job = [...prevJobs, ...action.payload];
        }
    }
})

export const {replaceJobArray} = JobSlice.actions;
export default JobSlice.reducer;