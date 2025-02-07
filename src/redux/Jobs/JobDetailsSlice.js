import { createSlice } from "@reduxjs/toolkit";

const JobDetailsSlice = createSlice({
    name:"jobDetails",
    initialState:{},
    reducers:{
        updateJobDetails:(state,action)=>{
            return action.payload;
        }
    }
})

export const {updateJobDetails} = JobDetailsSlice.actions;
export default JobDetailsSlice.reducer;