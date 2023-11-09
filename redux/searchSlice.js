import { createSlice } from "@reduxjs/toolkit";

const initialState = { search: "Python Developer", location: "", type: "" };

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    getSearch: (state, action) => {
      const { search, location, type } = action.payload;
      state.search = search;
      state.location = location;
      state.type = type;
    },
  },
});

export const { getSearch } = searchSlice.actions;

export default searchSlice.reducer;
