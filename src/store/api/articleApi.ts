import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      headers.set("x-api-key", process.env.REACT_APP_X_API_KEY || "");
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("access_token")}`
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
