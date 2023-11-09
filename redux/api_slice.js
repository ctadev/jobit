import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
    name: 'apiSlices',
    initialState: 'https://jsearch.p.rapidapi.com/search/',
    reducers: {
        searchJob: (state, action) => (state = ''),
    },
});

export default apiSlice.reducer;
