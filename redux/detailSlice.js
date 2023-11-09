import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detailSlice",
  initialState: null,
  reducers: {
    getDetail: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getDetail } = detailSlice.actions;

export default detailSlice.reducer;
