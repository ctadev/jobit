import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loadingSlices",
  initialState: false,
  reducers: {
    toggleLoading: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { toggleLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
