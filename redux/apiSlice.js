import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "Python",
  location: "",
  distance: "",
  type: "",
  remote: false,
  experience: "",
  api: "https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&num_pages=1",
};

const apiSlice = createSlice({
  name: "apiSlices",
  initialState,
  reducers: {
    searchJob: (state, action) => {
      const { search, location, type } = action.payload;
      state.search = search;
      state.location = location;
      state.type = type;
      state.api = `https://jsearch.p.rapidapi.com/search?query=${
        state.search
      }%20${state.location}&num_pages=20&remote_jobs_only=${
        state.remote ? state.remote : false
      }&employment_types=${
        state.type ? state.type : "FULLTIME, CONTRACTOR, PARTTIME, INTERN"
      }&job_requirements=${
        state.experience
          ? state.experience
          : "under_3_years_experience, more_than_3_years_experience, no_experience, no_degree"
      }&radius=${state.distance ? state.distance : "500"}`;
    },
    FilterTypeJob: (state, action) => {
      const { type, remote } = action.payload;
      state.type = type;
      state.remote = remote;
      state.api = `https://jsearch.p.rapidapi.com/search?query=${
        state.search
      }%20${state.location}&num_pages=20&remote_jobs_only=${
        state.remote ? state.remote : false
      }&employment_types=${
        state.type ? state.type : "FULLTIME, CONTRACTOR, PARTTIME, INTERN"
      }&job_requirements=${
        state.experience
          ? state.experience
          : "under_3_years_experience, more_than_3_years_experience, no_experience, no_degree"
      }&radius=${state.distance ? state.distance : "500"}`;
    },
    FilterLevelJob: (state, action) => {
      const { experience } = action.payload;
      state.experience = experience;
      state.api = `https://jsearch.p.rapidapi.com/search?query=${
        state.search
      }%20${state.location}&num_pages=20&remote_jobs_only=${
        state.remote ? state.remote : false
      }&employment_types=${
        state.type ? state.type : "FULLTIME, CONTRACTOR, PARTTIME, INTERN"
      }&job_requirements=${
        state.experience
          ? state.experience
          : "under_3_years_experience, more_than_3_years_experience, no_experience, no_degree"
      }&radius=${state.distance ? state.distance : "500"}`;
    },
    FilterLocationJob: (state, action) => {
      const { distance } = action.payload;
      state.distance = distance;
      state.api = `https://jsearch.p.rapidapi.com/search?query=${
        state.search
      }%20${state.location}&num_pages=20&remote_jobs_only=${
        state.remote ? state.remote : false
      }&employment_types=${
        state.type ? state.type : "FULLTIME, CONTRACTOR, PARTTIME, INTERN"
      }&job_requirements=${
        state.experience
          ? state.experience
          : "under_3_years_experience, more_than_3_years_experience, no_experience, no_degree"
      }&radius=${state.distance ? state.distance : "500"}`;
    },
  },
});

export const { searchJob, FilterLevelJob, FilterTypeJob, FilterLocationJob } =
  apiSlice.actions;

export default apiSlice.reducer;
