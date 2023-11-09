import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapid_api = process.env.NEXT_PUBLIC_RAPID_API_KEY;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapid_api,
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

export const companyJobsApi = createApi({
  reducerPath: "companyJobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsearch.p.rapidapi.com/search",
    headers: options.headers,
  }),
  endpoints: (builder) => ({
    getCompanyJobs: builder.query({
      query: (companyName) => `?query=${companyName}&num_pages=1`,
    }),
  }),
});

export const { useGetCompanyJobsQuery } = companyJobsApi;
