import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { companyJobsApi } from "./companyJobsSlice";
import currentCompanyDataReducer from "./currentCompanyDataSlice";
import jobListSliceReducer from "./jobListSlice";

const store = configureStore({
  reducer: {
    apiSlice,
    currentCompanyData: currentCompanyDataReducer,
    jobList: jobListSliceReducer,
    [companyJobsApi.reducerPath]: companyJobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(companyJobsApi.middleware),
});
setupListeners(store.dispatch);

export default store;
