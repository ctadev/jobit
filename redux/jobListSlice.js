import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const jobListSlice = createSlice({
    name: "jobList",
    initialState,
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { update } = jobListSlice.actions;

export default jobListSlice.reducer;