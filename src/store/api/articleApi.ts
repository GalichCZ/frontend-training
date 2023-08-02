import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      headers.set("x-api-key", process.env.REACT_APP_X_API_KEY || "");
      headers.set(
        "Authorization",
        "Bearer be9ccd82-b61e-4dca-be68-71bbd87cedae"
      );
    },
  }),
  endpoints: (build) => ({
    getArticles: build.query({
      query: (offset: number) => `/articles?limit=5&offset=${offset}`,
    }),
  }),
});

export const { useGetArticlesQuery } = articleApi;
